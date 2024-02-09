// Code: nextjs-dashboard/app/dashboard/loading.tsx
import DashboardSkeleton from "../ui/skeletons";

export default function Loading() {
    console.log('from nextjs-dashboard/app/dashboard/loading.tsx: Loading...');
    return (
        <>
            <h1>Loading...</h1>
            <DashboardSkeleton />;
        </>
    )
}
