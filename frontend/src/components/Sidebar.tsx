import type { ReactNode } from "react"

interface SidebarInset{
    label: string;
    page: () => void;
    icon: ReactNode;
}

interface SidebarProps {
    logo: ReactNode;
    items: SidebarInset[];
}

export default function Sidebar({ logo, items }: SidebarProps) {
    return (
        <aside className="w-56 bg-gray-100 p-4 flex flex-col gap-4">
            <div className="text-2xl font-bold mb-4">
                {logo}
            </div>
            <div>
                {items.map((item, index) => (
                    <button 
                        key={index}
                        onClick={item.page} 
                        className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-200">
                            {item.icon}
                            {item.label}    
                    </button>
                ))}
            </div>
        </aside>
    )
}