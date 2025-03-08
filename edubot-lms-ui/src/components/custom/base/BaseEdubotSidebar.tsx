import { Link } from '@tanstack/react-router';
import { Fragment, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Home, BookOpen, Clock, FileText, Award, Layers, TicketCheck, User, LogOut, AlignJustify } from 'lucide-react';

const sidebarItems = [
  { id: "home", label: 'Home', path: '/home', icon: <Home size={20} /> },
  { id: "courses", label: 'Courses & Programs', path: '/courses', icon: <BookOpen size={20} /> },
  { id: "performance", label: 'Performance', path: '/performance', icon: <Clock size={20} /> },
  { id: "submissions", label: 'My Submissions', path: '/submissions', icon: <FileText size={20} /> },
  { id: "certificate", label: 'Certificate', path: '/certificate', icon: <Award size={20} /> },
  { id: "batch", label: 'Batch', path: '/batch', icon: <Layers size={20} /> },
  { id: "tickets", label: 'Raised Tickets', path: '/SupportTicket4', icon: <TicketCheck size={20} /> },
  { id: "profile", label: 'Profile', path: '/ProfilePage', icon: <User size={20} /> },
  { id: "signout", label: 'Sign out', path: '/signout', icon: <LogOut size={20} /> },
];

interface MenuItemsProps {
  setOpen: (open: boolean) => void;
}

function MenuItems({ setOpen }: MenuItemsProps) {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className="tw-flex-col tw-flex tw-gap-1 tw-mr-4 tw-text-md">
      {sidebarItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          onClick={handleClick}
          className="tw-flex tw-cursor-pointer tw-items-center tw-gap-2 tw-rounded tw-py-2 tw-px-4 tw-font-normal hover:tw-bg-primary-button-pressed tw-transition-colors"
          activeProps={{ className: "tw-bg-primary-button-pressed" }}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

const BaseEdubotSidebar: React.FC = () => {
  const { setOpenSidebar, openSidebar } = useState();

  return (
    <Fragment>
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="tw-fixed tw-top-4 tw-left-4 tw-z-50 lg:tw-hidden">
        <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
          <SheetTrigger className="tw-p-2 tw-rounded-md tw">
            <AlignJustify size={24} />
          </SheetTrigger>
          
          {/* Mobile Sidebar Sheet */}
          <SheetContent side="left" className="tw-w-64 tw-bg-primary tw-text-white">
            <div className="tw-flex tw-flex-col tw-h-full">
              <SheetHeader className="tw-border-b tw-border-white/10">
                <SheetTitle className="tw-flex tw-gap-2 tw-mt-5 tw-mb-5">
                  <h1 className="tw-text-xl tw-font-extrabold tw-text-white">
                    Hello! Bhargav
                    <span className="tw-text-xl tw-font-normal tw-block">Welcome to Edubot</span>
                  </h1>
                </SheetTitle>
              </SheetHeader>
              <MenuItems setOpen={setOpenSidebar} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar - Completely hidden on mobile */}
      <aside className="tw-hidden lg:tw-block tw-w-64 tw-bg-primary tw-text-white tw-flex-col tw-p-6">
        <div className="tw-flex tw-items-center tw-gap-2 tw-mb-6">
          <h1 className="tw-text-xl tw-font-extrabold">
            Hello! Bhargav
            <span className="tw-text-xl tw-font-normal tw-block">Welcome to Edubot</span>
          </h1>
        </div>
        <MenuItems setOpen={setOpenSidebar} />
      </aside>
    </Fragment>
  );
};

export default BaseEdubotSidebar;