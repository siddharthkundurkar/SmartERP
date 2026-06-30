import { Building2, CheckCircle } from "lucide-react";

export default function CompanyCard({
    company,
    selected,
    onSelect,
}) {
    return (
        <div
            onClick={() => onSelect(company.id)}
            className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200
            ${
                selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-400"
            }`}
        >
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-blue-100 p-3">
                        <Building2
                            size={28}
                            className="text-blue-600"
                        />
                    </div>

                    <div>

                        <h3 className="text-lg font-semibold">
                            {company.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {company.role}
                        </p>

                    </div>

                </div>

                {selected && (
                    <CheckCircle
                        className="text-blue-600"
                        size={28}
                    />
                )}

            </div>
        </div>
    );
}