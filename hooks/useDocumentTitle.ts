import { useEffect } from 'react';

const BASE_TITLE = 'Ben Prescott';

export const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} - AI Leader, Architect, Veteran`;
    return () => {
      document.title = `${BASE_TITLE} - AI Leader, Architect, Veteran`;
    };
  }, [title]);
};
