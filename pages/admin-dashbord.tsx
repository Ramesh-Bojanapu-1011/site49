import React from "react";
import Head from "next/head";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#00bcd4", "#ff6384"];

// Define the User type
type User = {
  email: string;
  password: string;
  first: string;
  last: string;
  signupTime: Date;
  loginTime: Date;
  logoutTime: Date;
};

const AdminDashboard = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  // Helper: Get week number from a date
  function getWeek(date: Date) {
    const d = new Date(date.getTime());
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    return (
      d.getFullYear() +
      "-W" +
      Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
    );
  }

  // barData must be declared after users state
  const barData = React.useMemo(() => {
    if (!users || users.length === 0) return [];
    const weekCounts: Record<string, number> = {};
    users.forEach((user) => {
      const week = getWeek(new Date(user.signupTime));
      weekCounts[week] = (weekCounts[week] || 0) + 1;
    });
    return Object.entries(weekCounts).map(([week, count]) => ({ week, count }));
  }, [users]);

  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const usersData = localStorage.getItem("users");

    setUsers(usersData ? JSON.parse(usersData) : []);
    const currentUserData = localStorage.getItem("currentUser");

    setCurrentUser(currentUserData ? JSON.parse(currentUserData) : null);
  }, []);
  const totalUsers = users.length;
  const loggedInUserCount = currentUser ? 1 : 0;
  const loggedOutUsers = totalUsers - loggedInUserCount;

  const { t } = useTranslation();
  const pieData = [
    { name: t("adminDashboard.pie.LoggedInUsers"), value: loggedInUserCount },
    { name: t("adminDashboard.pie.AllUsers"), value: loggedOutUsers },
  ];
  return (
    <>
      <Head>
        <title>{t("adminDashboard.pageTitle")}</title>
        <meta name="description" content={t("adminDashboard.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[40vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("adminDashboard.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("adminDashboard.heroDesc")}
            </p>
          </div>
        </section>

        {/* User Details Table */}
        <section className="py-10 px-6    mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-[#00bcd4] text-center">
            {t("adminDashboard.userDetailsTitle")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-[#00bcd4]">
                    {t("adminDashboard.table.id")}
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-[#00bcd4]">
                    {t("adminDashboard.table.name")}
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-[#00bcd4]">
                    {t("adminDashboard.table.email")}
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-[#00bcd4]">
                    {t("adminDashboard.table.registerTime")}
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-[#00bcd4]">
                    {t("adminDashboard.table.loginTime")}
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-[#00bcd4]">
                    {t("adminDashboard.table.logoutTime")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-800 text-nowrap"
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">
                      {user.first + " " + user.last}
                    </td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">
                      {user.signupTime.toLocaleString()}
                    </td>
                    <td className="py-3 px-6">
                      {user.loginTime.toLocaleString()}
                    </td>
                    <td className="py-3 px-6">
                      {user.logoutTime.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pie Chart Section */}
        <section className="py-10 px-6 max-w-3xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-[#00bcd4] text-center">
            {t("adminDashboard.activityTitle")}
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
        {/* Bar Chart Section: Weekly Registrations */}
        <section className="py-10 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-[#00bcd4] text-center">
            {t("adminDashboard.registrationsTitle")}
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#00bcd4"
                  name={t("adminDashboard.bar.registrations")}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AdminDashboard;
