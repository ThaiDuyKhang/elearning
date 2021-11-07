import { Redirect, Route } from "react-router";
import { Menu} from "antd";
import "./style/StyleAdmin.css";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  DotsHorizontalIcon,
  AcademicCapIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  PlusCircleIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { TOKEN, USER_SIGNIN } from "../../utilities/Settings/config";
import { useSelector } from "react-redux";
import { history } from "../../App";
import _ from "lodash";
import { Link} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;

  const { userSignIn } = useSelector((state) => state.UserManagermentReducer);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { SubMenu } = Menu;

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
    {
      name: "Courses",
      href: "/admin/courses",
      icon: AcademicCapIcon,
    },
    { name: "Users", href: "/admin/users", icon: UsersIcon },
    {
      name: "Instructor",
      href: "/admin/instructor",
      icon: CalendarIcon,
    },
    { name: "Documents", href: "/admin/docs", icon: FolderIcon },
  ];

  if (!localStorage.getItem(USER_SIGNIN)) {
    return <Redirect to="/alert" />;
  }

  // if (userSignIn.maLoaiNguoiDung !== "GV") {
  //   return <Redirect to="/alert" />;
  // }

  const renderSignIn = () => {
    if (!_.isEmpty(userSignIn)) {
      return (
        <Menu.Item>
          <div className="flex flex-col justify-end items-end mx-2">
            <button
              onClick={() => {
                history.push("/profile");
              }}
              className=" px-3 py-2 text-sm text-gray-700 hover:text-red-400"
            >
              Profile
            </button>
            <button
              onClick={() => {
                localStorage.removeItem(USER_SIGNIN);
                localStorage.removeItem(TOKEN);
                window.location.replace("/");
              }}
              className=" px-3 py-2 text-sm text-gray-700 hover:text-red-400"
            >
              Sign out
            </button>
          </div>
        </Menu.Item>
      );
    }
  };
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <div className="h-screen flex overflow-hidden bg-gray-100">
              <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                  as="div"
                  static
                  className="fixed inset-0 flex z-40 md:hidden"
                  open={sidebarOpen}
                  onClose={setSidebarOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex-shrink-0 flex items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="/images/logo-white.png"
                          alt="Cybersoft"
                          width="100%"
                          onClick={() => {
                            history.push("/");
                          }}
                        />
                      </div>
                      <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2 space-y-1">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? " text-white"
                                  : "text-gray-300 hover:bg-gray-900 hover:text-white",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-gray-300"
                                    : "text-gray-400 group-hover:text-gray-300",
                                  "mr-4 flex-shrink-0 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                  </div>
                </Dialog>
              </Transition.Root>

              {/* Static sidebar for desktop */}
              <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col h-0 flex-1">
                    <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
                      <img
                        className="h-8 w-auto cursor-pointer"
                        src="/images/logo-white.png"
                        alt="Cybersoft"
                        width="100%"
                        onClick={() => {
                          history.push("/");
                        }}
                      />
                    </div>
                    <div className="flex-1 flex flex-col overflow-y-auto">
                      <Menu
                      className="flex-1 px-2 py-4 bg-gray-800 space-y-1 "
                        style={{ width: 256, backgroundColor:"#1F2937", color:"#fff" }}
                        // defaultSelectedKeys={["1"]}
                        // defaultOpenKeys={["sub1"]}
                      >
                        <Menu.Item key="1" style={{display:"flex", color:"#fff"}}>
                          <Link
                            to="/admin/dasboard"
                            className="flex items-center"
                          ><HomeIcon className="mr-2" width="15"/>Dashboard</Link>
                        </Menu.Item>
                        <SubMenu
                          // style={{display:"flex", alignItems:"end"}}
                          key="sub1"
                          title="Courses"
                          icon={<AcademicCapIcon width="15"/>}
                        >
                          <Menu.Item key="2" style={{display:"flex", alignItems:"center"}}>
                          <Link
                            to="/admin/courses"
                            style={{display:"flex"}}
                          ><DotsHorizontalIcon className="mr-2" width="15"/>All Course</Link>
                         </Menu.Item>
                          <Menu.Item key="3" style={{display:"flex", alignItems:"center"}}>
                          <Link
                            to="/admin/courses/add-new"
                            style={{display:"flex"}}
                          ><PlusCircleIcon className="mr-2" width="15"/>Add new</Link>
                         </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4" style={{display:"flex"}}>
                        <Link
                            to="/admin/users"
                            style={{display:"flex"}}
                          ><UsersIcon className="mr-2" width="15"/>Users</Link>
                        </Menu.Item>
                        <Menu.Item key="5" style={{display:"flex"}}>
                          
                          <Link
                            to="/admin/instructor"
                            style={{display:"flex"}}
                          ><CalendarIcon className="mr-2" width="15"/>Instructor</Link>
                        </Menu.Item>
                        <Menu.Item key="6" style={{display:"flex"}}>
                          
                          <Link
                            to="/admin/docs"
                            style={{display:"flex"}}
                          ><FolderIcon className="mr-2" width="15"/>Document</Link>
                        </Menu.Item>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
                  <button
                    className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="flex-1 px-4 flex justify-between">
                    <div className="flex-1 flex">
                      <form
                        className="w-full flex md:ml-0"
                        action="#"
                        method="GET"
                      >
                        <label htmlFor="search-field" className="sr-only">
                          Search
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                            <SearchIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search-field"
                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
                      <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Open user menu</span>
                                <span className="mr-3 font-medium">
                                  Hi! {userSignIn.taiKhoan}
                                </span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg py-1 bg-white ring-1 
                                ring-black ring-opacity-5 focus:outline-none"
                              >
                                {renderSignIn()}
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  </div>
                </div>

                <main className="flex-1 relative overflow-y-auto focus:outline-none">
                  <Component {...propsRoute} />
                </main>
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
}
