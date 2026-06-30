import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CompanyCard from "../components/CompanyCard";

import { me, selectCompany } from "../api/auth";

import useAuthStore from "../auth/store/auth.store";

export default function SelectCompany() {

    const navigate = useNavigate();

    const setCompany = useAuthStore(
        (state) => state.setCompany
    );

    const login = useAuthStore(
        (state) => state.login
    );

    const [companies, setCompanies] = useState([]);

    const [selectedCompany, setSelectedCompany] =
        useState("");

    useEffect(() => {

        loadCompanies();

    }, []);

    async function loadCompanies() {

        try {

            const response = await me();

            const companyList =
                response.data.companyUsers.map((item) => ({
                    id: item.company.id,
                    name: item.company.name,
                    role: item.role.name,
                }));

            setCompanies(companyList);

        } catch (error) {

            console.log(error);

        }

    }

    async function handleContinue() {

        if (!selectedCompany) {

            alert("Please select a company");

            return;

        }

        try {

            const response =
                await selectCompany(selectedCompany);

            login({
                user: response.data.user,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            });

            setCompany(response.data.company);

            navigate("/dashboard");

        } catch (error) {

            alert(error.response?.data?.message);

        }

    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">

            <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-xl">

                <h1 className="text-3xl font-bold">
                    Select Company
                </h1>

                <p className="mt-2 text-gray-500">
                    Choose the company you want to work with.
                </p>

                <div className="mt-8 space-y-4">

                    {companies.map((company) => (

                        <CompanyCard
                            key={company.id}
                            company={company}
                            selected={
                                selectedCompany === company.id
                            }
                            onSelect={setSelectedCompany}
                        />

                    ))}

                </div>

                <button
                    onClick={handleContinue}
                    className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Continue
                </button>

            </div>

        </div>
    );
}