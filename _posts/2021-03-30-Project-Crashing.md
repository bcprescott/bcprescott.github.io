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

Have you been involved in a project that requires a shortened timeline? It isn't uncommon for project deadlines to be imposed after a project kickoff occurs, or to attempt to accelerate a project for any number of reasons. Different situations require Project Management to evaluate the project tasks and schedule to determine where or how an overall project can be shortened, requiring manual adjustments and a sprinkle of intuition. 

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

We'll suppose that our objective function, $$Z$$, represents the internal cost of creating bread. 

**Objective Function**

MINIMIZE:
$$ Z = 2x + y $$

**Decision Variables**

$$x$$ -- the price of dough

$$y$$ the price of yeast

**Constraints**

$$x >= 0, y >= 0$$

Approach & Model Formulation
----------------------------

Part of the crashing effort typically starts with leveraging or creating a _Program Evaluation Review Technique_ (PERT) chart. PERT charts provide a visualization of the project's timeline, with different tasks associated with the project and their dependencies. PERT charts may also provide additional information, such as the duration of each task and the effort from the different project resources. 

Interpreting The Results
------------------------

What Next?
----------