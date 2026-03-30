import React, { useState, useEffect } from 'react'
import { DownOutlined, EditFilled, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import axiosInstance from "../Form/Utils/AxiosInstance";
const AdminRoleAssign = () => {
  const [openModel, setModel] = useState(false)
  const [users, setUser] = useState([])
  // const [selectRole, setSelectRole] = useState("")

  const items = [
    {
      key: '1',
      label: 'USER',
      role: "user",
      // disabled: true,
    },
    // {
    //   type: 'divider',
    // },
    // {
    //   key: '2',
    //   label: 'ADMIN',
    //   extra: '⌘R',
    // },
    {
      key: '2',
      label: 'RETAILER',
      role: "retailer",

      extra: '⌘W',
    },
    {
      key: '3',
      label: 'WHOLESALER',
      role: "wholesaler",
      icon: <SettingOutlined />,
      extra: '⌘U',
    },
  ];

  useEffect(() => {
    console.log("Component mounted ");
    getUser()
  }, []);

  const getUser = async () => {
    console.log("getUser called ");
    try {
      const res = await axiosInstance.get("/registerroute/getuserController")
      if (res?.data?.success) {
        setUser(res.data.data)


      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  }
  
  const handleMenuClick = async ({ key }, userId) => {
    console.log(" handleMenuClick called " );
    const selectedItem = items.find(item => item.key === key);
    const role = selectedItem?.role;

    console.log("Selected role:", role, "for user ID:", userId);

    // // state ch store (optional but tu use kar rahi aa)
    // setSelectRole(role);  
     try {
      const res = await axiosInstance.put(`/registerroute/updateRole/${userId}`,
        { role });

      if (res?.data?.success) {
        // UI update without reload
        setUser(prev => {
           prev.map(user=>{
            user._id === userId ? { ...user, role } : user

           })
           
        })
      };
    } catch (error) {
      console.log("Error assigning role:", error);
    }
  };


  return (
    <>
      <section className='m-6'>
        <div class="flex justify-between items-end">
          <div class="space-y-1">
            <h2 class="text-3xl font-extrabold tracking-tight">User Role Management</h2>
            <p class=" text-sm font-medium">Define, assign, and audit access permissions across your organization.</p>
          </div>
          <div class="flex space-x-3">
            <button class="px-6 py-2.5  text-sm font-semibold rounded-lg  transition-colors">
              Export Report
            </button>
            <button class="px-6 py-2.5  text-sm font-bold rounded-lg shadow-sm  transition-all flex items-center space-x-2">
              <span class="material-symbols-outlined text-sm">add_circle</span>
              <span>Create New User</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-6 mt-6">
          <div class="col-span-1 p-6 rounded-xl shadow-sm border">
            <p class="text-xs font-bold uppercase tracking-widest  mb-2">Total Users</p>
            <h3 class="text-2xl font-extrabold ">{users.length}</h3>
            <p class="text-[10px] text-primary font-semibold mt-2 flex items-center"><span class="material-symbols-outlined text-[12px] mr-1">trending_up</span> +12% from last month</p>
          </div>
          <div class="col-span-1 p-6 rounded-xl shadow-sm border">
            <p class="text-xs font-bold uppercase tracking-widest  mb-2">Active Admins</p>
            <h3 class="text-2xl font-extrabold ">
              {users.filter(user => user.role === "Admin").length}</h3>
            <p class="text-[10px] font-medium mt-2">3 Pending approval</p>
          </div>
          <div class="col-span-2 p-6 rounded-xl relative overflow-hidden flex items-center">
            <div class="relative z-10 space-y-2">
              <h4 class="text-lg font-bold">Security Pulse</h4>
              <p class="text-sm max-w-200px">All role templates are currently aligned with ISO 27001 standards.</p>
            </div>
            <div class="ml-auto w-32 h-16 bg-primary/10 rounded-full blur-2xl absolute -right-20px"></div>
            <span class="material-symbols-outlined text-6xl text-primary/10 absolute -right-0.5 -bottom-1.5">shield</span>
          </div>
        </div>

        <div class="rounded-lg shadow-sm">
          <div class="px-6 py-5 flex items-center justify-between border-b">
            <div class="flex items-center space-x-4">
              <div class="relative group">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm">filter_list</span>
                <select class="bg-surface-container-low border-none rounded-lg pl-9 pr-8 py-2 text-sm focus:ring-1 focus:ring-primary/20 appearance-none font-medium">
                  <option>All Roles</option>
                  <option>Administrator</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
              <div class="h-8 w-1 bg-outline-variant/20"></div>
              <span class="text-xs font-bold uppercase">324 Users Filtered</span>
            </div>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm">search</span>
              <input class="bg-surface-container-low border-none rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 w-80" placeholder="Search by name or email..." type="text" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <table className="w-full mt-6 border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left">
              <th className="px-6 py-3 text-slate-500 font-semibold text-xs tracking-wide">NAME & IDENTITY</th>
              <th className="px-6 py-3 text-slate-500 font-semibold text-xs tracking-wide">EMAIL ADDRESS</th>
              <th className="px-6 py-3 text-slate-500 font-semibold text-xs tracking-wide">CURRENT ROLE</th>
              <th className="px-6 py-3 text-slate-500 font-semibold text-xs tracking-wide">LAST ACTIVE</th>
              <th className="px-6 py-3 text-slate-500 font-semibold text-xs tracking-wide">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white shadow-sm hover:shadow-md transition rounded-xl">

                <td className="px-6 py-4 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {user.username?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{user.username}</p>
                    <p className="text-xs text-slate-500">ID: {user._id}</p>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-slate-500">
                  {user.createdAt}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => setModel(!openModel)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-blue-600 underline hover:bg-primary/90 transition">



                    <Dropdown
                      menu={{
                        items,
                        onClick: (info) => handleMenuClick(info, user._id),
                      }}>
                      <a onClick={e => e.preventDefault()}>
                        Assign Role
                        <DownOutlined />
                      </a>
                    </Dropdown>

                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-span-2 p-6 rounded-xl relative overflow-hidden m-4 flex mt-38 items-center bg-blue-600 text-white shadow-md">

        {/* Content */}
        <div className="relative z-10 space-y-2">
          <h4 className="text-lg font-bold">Security Pulse</h4>
          <p className="text-sm max-w-xs text-blue-100">
            All role templates are currently aligned with ISO 27001 standards.
          </p>
        </div>

        {/* Glow Effect */}
        <div className="ml-auto w-40 h-20 bg-white/20 rounded-full blur-3xl absolute -right-16 -top-6"></div>

        {/* Icon */}
        <span className="material-symbols-outlined text-7xl text-white/20 absolute right-4 bottom-2">
          shield
        </span>

      </div>

    </>
  )
}

export default AdminRoleAssign