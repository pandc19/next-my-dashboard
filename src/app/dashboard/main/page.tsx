import { SimpleWidget, WidgetsGrid } from "@/components";


export const metadata = {
    title: 'Admin Dashboard',
    description: 'Laboris aliquip mollit dolor labore excepteur dolor aliqua do voluptate.',
};

export default function MainPage() {
    return (
        <div className="text-black">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Información general</span>

            <WidgetsGrid />
        </div>
    );
}