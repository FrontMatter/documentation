import * as React from 'react';
import { PageFrontMatter } from '../../models/PageFrontMatter';
import { PageInfo } from './PageInfo';

export interface IPageProps {
  items: PageFrontMatter[];
  page: PageFrontMatter | undefined;
}

export const Page: React.FunctionComponent<React.PropsWithChildren<IPageProps>> = ({ items, page, children }: React.PropsWithChildren<IPageProps>) => {

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
      <div className={`relative my-16 min-w-0 w-full flex-auto lg:max-h-full`} style={{ marginLeft: '-1px' }}>
        {children}

        <PageInfo page={page} items={items} />
      </div>
    </div>
  );
};

