"use client";

import { Id } from "@/convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  if (document === undefined) {
    return (
      <div>
        <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl"></div>
    </div>
  );
};

export default DocumentIdPage;