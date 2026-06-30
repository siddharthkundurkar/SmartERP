import {
    Calculator,
    Package,
    ShoppingCart,
    Truck,
    BarChart3,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        title: "Accounting",
        description:
            "Manage ledgers, vouchers, GST, journal entries and financial statements.",
        icon: Calculator,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Inventory",
        description:
            "Track stock, warehouses, batches, units and inventory movements.",
        icon: Package,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Sales",
        description:
            "Create quotations, invoices, POS billing and customer management.",
        icon: ShoppingCart,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Purchase",
        description:
            "Handle vendors, purchase orders, GRNs and purchase invoices.",
        icon: Truck,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Reports",
        description:
            "Business reports, profit & loss, balance sheet and analytics.",
        icon: BarChart3,
        color: "bg-pink-100 text-pink-600",
    },
    {
        title: "Secure",
        description:
            "Enterprise authentication, RBAC, JWT security and audit logs.",
        icon: ShieldCheck,
        color: "bg-cyan-100 text-cyan-600",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <h2 className="text-4xl font-bold">
                        Everything You Need
                    </h2>

                    <p className="mt-4 text-lg text-slate-600">
                        SmartERP provides every essential module to run
                        your business efficiently.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={feature.title}
                                className="rounded-3xl bg-white p-8 shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div
                                    className={`mb-6 inline-flex rounded-2xl p-4 ${feature.color}`}
                                >
                                    <Icon size={34} />
                                </div>

                                <h3 className="text-2xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {feature.description}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>
        </section>
    );
}