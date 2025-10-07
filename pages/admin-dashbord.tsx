import Footer from "@/components/Footer";
import Header from "@/components/Hedder";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// --- Constants ---
const COLORS = ["#00bcd4", "#ff6384"]; // Cyan and Pink/Red
const CHART_TEXT_COLOR = "#00bcd4"; // Use the main accent color for chart text

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

// --- Component ---
const AdminDashboard = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const { t } = useTranslation();

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

  // Bar Chart Data (Registrations by Week)
  const barData = React.useMemo(() => {
    if (!users || users.length === 0) return [];
    const weekCounts: Record<string, number> = {};
    users.forEach((user) => {
      // Ensure signupTime is a Date object for the helper function
      const date = new Date(user.signupTime);
      if (!isNaN(date.getTime())) {
        const week = getWeek(date);
        weekCounts[week] = (weekCounts[week] || 0) + 1;
      }
    });

    // Sort by week for better chart presentation (optional but recommended)
    return Object.entries(weekCounts)
      .map(([week, count]) => ({ week, count }))
      .sort((a, b) => a.week.localeCompare(b.week));
  }, [users]);

  // Load data from localStorage on mount
  React.useEffect(() => {
    const usersData = localStorage.getItem("users");
    setUsers(usersData ? JSON.parse(usersData) : []);

    const currentUserData = localStorage.getItem("currentUser");
    setCurrentUser(currentUserData ? JSON.parse(currentUserData) : null);
  }, []);

  // --- Key Metrics Calculations ---
  const totalUsers = users.length;
  // NOTE: The original logic counts only the 'currentUser' as logged in.
  // This is kept for consistency with the original component logic.
  const loggedInUserCount = currentUser ? 1 : 0;
  const loggedOutUsers = totalUsers - loggedInUserCount;

  // Pie Chart Data (User Activity Status)
  const pieData = [
    { name: t("adminDashboard.pie.LoggedInUsers"), value: loggedInUserCount },
    { name: t("adminDashboard.pie.AllUsers"), value: loggedOutUsers },
  ];

  // --- Component Structure ---
  return (
    <>
      <Head>
        <title>{t("adminDashboard.pageTitle")}</title>
        <meta name="description" content={t("adminDashboard.pageDesc")} />
      </Head>
      <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Header />

        {/* --- Hero Section & Welcome --- */}
        <section className="p-10 bg-[#00bcd4]/10 dark:bg-cyan-900/30 border-b border-[#00bcd4]/50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-[#0097a7] dark:text-[#26c6da] mb-2">
              {t("adminDashboard.heroTitle")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("adminDashboard.heroDesc")}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto p-6 lg:p-10 w-full flex-grow">
          {/* --- Key Metrics Section (Cards) --- */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-[#00bcd4] transition duration-300 hover:shadow-xl">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t("adminDashboard.metrics.totalUsers")}{" "}
                {/* Placeholder T-Key */}
              </p>
              <p className="text-4xl font-bold mt-1 text-[#00bcd4]">
                {totalUsers}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-emerald-500 transition duration-300 hover:shadow-xl">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t("adminDashboard.metrics.loggedIn")} {/* Placeholder T-Key */}
              </p>
              <p className="text-4xl font-bold mt-1 text-emerald-500">
                {loggedInUserCount}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-[#ff6384] transition duration-300 hover:shadow-xl">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t("adminDashboard.metrics.loggedOut")}{" "}
                {/* Placeholder T-Key */}
              </p>
              <p className="text-4xl font-bold mt-1 text-[#ff6384]">
                {loggedOutUsers}
              </p>
            </div>
          </section>

          {/* --- Charts Section (Grid Layout) --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pie Chart: User Activity Status */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 text-[#00bcd4] border-b pb-3 border-gray-200 dark:border-gray-700">
                {t("adminDashboard.activityTitle")}
              </h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${
                          percent ? (Number(percent) * 100).toFixed(0) : 0
                        }%`
                      }
                      outerRadius={120} // Slightly larger for better visual
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
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        color: "#333", // Tooltip text color
                      }}
                    />
                    <Legend iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart: Weekly Registrations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 text-[#00bcd4] border-b pb-3 border-gray-200 dark:border-gray-700">
                {t("adminDashboard.registrationsTitle")}
              </h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={barData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e0e0e0"
                      className="dark:stroke-gray-700"
                    />
                    <XAxis
                      dataKey="week"
                      stroke={CHART_TEXT_COLOR}
                      className="text-xs"
                    />
                    <YAxis allowDecimals={false} stroke={CHART_TEXT_COLOR} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        color: "#333",
                      }}
                    />
                    <Legend iconType="square" />
                    <Bar
                      dataKey="count"
                      fill="#00bcd4"
                      name={t("adminDashboard.bar.registrations")}
                      radius={[4, 4, 0, 0]} // Rounded tops
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* --- User Details Table --- */}
          <section className="py-6">
            <h2 className="text-3xl font-bold mb-8 text-[#00bcd4] text-center">
              {t("adminDashboard.userDetailsTitle")}
            </h2>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-[#00bcd4]/10 dark:bg-cyan-900/50">
                  <tr>
                    <th className="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-[#0097a7] dark:text-[#26c6da]">
                      {t("adminDashboard.table.id")}
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-[#0097a7] dark:text-[#26c6da]">
                      {t("adminDashboard.table.name")}
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-[#0097a7] dark:text-[#26c6da]">
                      {t("adminDashboard.table.email")}
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-[#0097a7] dark:text-[#26c6da]">
                      {t("adminDashboard.table.registerTime")}
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-[#0097a7] dark:text-[#26c6da]">
                      {t("adminDashboard.table.loginTime")}
                    </th>
                    <th className="py-4 px-6 text-left text-xs font-semibold uppercase tracking-wider text-[#0097a7] dark:text-[#26c6da]">
                      {t("adminDashboard.table.logoutTime")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
                    >
                      <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {index + 1}
                      </td>
                      <td className="py-3 px-6 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                        {user.first + " " + user.last}
                      </td>
                      <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
                        {user.email}
                      </td>
                      <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
                        {new Date(user.signupTime).toLocaleString()}
                      </td>
                      <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
                        {new Date(user.loginTime).toLocaleString()}
                      </td>
                      <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
                        {user.logoutTime ? (
                          new Date(user.logoutTime).toLocaleString()
                        ) : (
                          <span className="text-emerald-500 font-semibold">
                            {/* Using a lighter text color for the dash for better contrast */}
                            Logged In
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && (
                <p className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No users found.
                </p>
              )}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AdminDashboard;
