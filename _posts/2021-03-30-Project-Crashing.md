---
title: "Project Crashing - A Linear Programming Approach"
toc: true
toc_sticky: true
tags: lp project gurobi optimization
categories:
  - Optimization
header:
  teaser: /assets/images/pert.png
---

Have you been involved in a project that requires a shortened timeline? It isn't uncommon for project deadlines to be imposed after a project kickoff occurs, or to attempt to accelerate a project for any number of reasons. 

Different situations require Project Management to evaluate the project tasks and schedule to determine where or how an overall project can be shortened, requiring manual adjustments and a sprinkle of intuition. 

<span style="color:red">**Disclaimer**</span>: Everything modeled in this post is fictional. No real data or project examples were used.

Introduction & Motivation
-----------------------

Having just spent the past three months focusing heavily on prescriptive analytics and building a number of optimization algorithms, I decided to write about a specific project I worked on that provided an analytical approach to solving what is known as _project crashing_. 

A shift or addition to project resources happens all the time. However, many decisions are made quickly and are based on intuition. I wanted to find a way to solve some of these problems using matmeatical algorithms, rather than best guesses. 

This approach uses a _Mixed-integer Programming_ method and is solved using commercial software called [Gurobi](https://www.gurobi.com/) and Python. 

Understanding Project Crashing
------------------------------

The purpose behind project crashing, or "crashing a project", is to shorten the overall project duration. This could be to hit a client imposed deadline, to keep project delivery times to a minimum, or to ensure we can free up resources as fast as possible for the next project.

Project crashing can be an exercise in itself, as tasks need to be evaluated to see if they can even be shortened/crashed, by how long, and what the impact to the project budget or internal costs are by shortened said tasks. 

There may be a few creative ways to shorten a task, including asking a client to support the effort, to add additional project resources to help speed up delivery, or to burn additional hours each day. An increase in internal costs is likely to occur with the either of the three mentioned options.

Introduction to Linear Optimization
-----------------------------------

Linear Optimization, or sometimes called Linear Programming ("LP"), is a term used to describe a mathematical model that uses linear functions to optimize a problem's solution. 

LP models are typically made up of an _Objective Function_, one or more _Constraints_, and _Decision Variables_. Common goals of LP models are to _Maximize_ or _Minimize_ the objective function. The decision variables are the values you want to find within the objective function that meet the minimization or maximization criteria, where-as the constraints provide "rules" that the model must follow while finding the right solution.  

Let's take a look at a short LP model...

**Background**

We'll suppose a fake company creates pants and shirts...

In order to make these they have the material polyester and cotton. They have 2000 units of polyester available and 700 units of cotton. 

Each pair of pants requires 2 units of polyester and 2 units of cotton.

Each shirt requires 1 unit of polyester and 2.5 units of cotton.

They sell a pair of pants at 30 dollars and a shirt at 20 dollars. 

The below objective function, $$Z$$, represents the sales revenue of pants and shirts. The company wants to maximize their revenue. 

**Objective Function**

MAXIMIZE:

$$Z = 30x + 20y$$

**Decision Variables**

the number of pants

$$x$$

the number of shirts

$$y$$

**Constraints**

polyester used for both pants and shirts needs to be less than the max available, 2000

$$2x + y <= 2000$$   

cotton used for both pants and shirts needs to be less than the max available, 700  

$$2x + 2.5 <= 700$$ 

ensures that values obtained for x and y are natural numbers, as you can't have negative pants/shirts. :)

$$x >= 0, y >= 0$$ 


Now that we have our model formulation, we can easily plug this info into Python and solve using Gurobi. I won't be going deep into Gurobi here, but heres a snippet:

{% highlight python %}

import gurobipy as gp
from gurobipy import GRB

# Create a new model
m = gp.Model("ClothesSales")

# Create variables
x = m.addVar(vtype=GRB.INTEGER, name="x")
y = m.addVar(vtype=GRB.INTEGER, name="y")

# Set objective
m.setObjective(30*x + 20*y, GRB.MAXIMIZE)

# Set constraints
m.addConstr(2*x + y <= 600, "polyester constraint")
m.addConstr(2*x + 2.5*y <= 700, "cotton constraint")
m.addConstr(x >= 0, "x non-negativity constraint")
m.addConstr(y >= 0, "y non-negativity constraint")

#Run the model    
m.optimize()

#Print the solution's variable values
for v in m.getVars():
  print('%s %g' % (v.varName, v.x))

#Print the objective function value
print('Obj: %g' % m.objVal)

{% endhighlight %}

The output of our model is shown below. We can see at the end that we'll achieve a maximum revenue of $9,330 by creating 267 pairs of jeans and 66 shirts, while ensuring the solution meets all of the given constrains.

![LPBasic](/assets/images/lpbasic.png)

Alright... back to project crashing!

Preparation & Approach
----------------------

Before we move too deep, lets mock something up quickly in Excel. 

The below screenshot shows an example project's task crash plan. We can see the following information, from left to right:

- Task names
- Letter assigned to tasks (used in the PERT chart later)
- Task dependencies or predecessors
- Standard duration of a task
- Estimated days the task _could_ be crashed
- Standard project cost
- Project cost if crashed
- The new task duration if crashed
- How much cost is added by crashing the project
- The cost of crashing per time unit

At the bottom you'll also see I've color-coded the two project resource, a senior and junior, as well as a made up internal cost per hour. I've also color-coded the tasks of which they are responsible. 

![rawsheet](/assets/images/raw.png)

Part of the crashing effort may involve creating a _Program Evaluation Review Technique_ (PERT) chart. PERT charts provide a visualization of the project's timeline, with different tasks associated with the project and their dependencies. PERT charts may also provide additional information, such as the duration of each task and the effort from the different project resources. 

We can now create a PERT chart from this information. There is plenty of information online on how to create a PERT chart, but it can follow information from the spreadsheet and just models the project visually.

![pert](/assets/images/pert.png)

From here we can create our model formulation. There is a lot involved with creating this 
 
Model Formulation & Code
----------------------------

Now that we have our PERT chart and our project costs/durations laid out, we can create our mathematical formulation and write some code to solve it. 

To help keep this post a bit shorter, I'm not going to be diving into the mapping of each task to the model. If you're interested in understanding more, please read [this paper](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzn5e_zOfvAhVBbc0KHYG-CR4QFjAAegQIBRAD&url=https%3A%2F%2Fpapers.ssrn.com%2Fsol3%2FDelivery.cfm%3Fabstractid%3D1012525&usg=AOvVaw1n3_0EWVhpRaZzoL2sQhP5&cshid=1617642742158203).

Using the scenario of shortening a project to hit a deadline, we'll start by defining our objective function, which aims at minimizing the project crash costs. I.e., we want to hit the deadline while keeping added costs as low as possible.

$$\sum_{a=1}^nD_aC_a$$




Interpreting The Results
------------------------

What Next?
----------