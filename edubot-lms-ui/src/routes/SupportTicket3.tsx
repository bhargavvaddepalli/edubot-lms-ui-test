import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/SupportTicket3")({
  component: () => (
    <div className="tw-min-h-screen tw-bg-[#F8F9FA] tw-text-black-900">
      {/* Navigation Bar */}
      <nav className="tw-flex tw-items-center tw-space-x-6 tw-bg-white tw-text-black-600 tw-p-4 tw-border-b tw-shadow-sm">
        <a href="#" className="tw-text-black-500 hover:tw-text-black">Dashboard</a>
        <span className="tw-text-black-400">|</span>
        <a href="#" className="tw-text-black-500 hover:tw-text-black">Website</a>
        <span className="tw-text-black-400">|</span>
        <a href="#" className="tw-font-semibold tw-text-black">Support</a>
      </nav>

      <div className="tw-max-w-6xl tw-mx-auto tw-p-6">
        {/* Back Button */}
        <a
          href="#"
          className="tw-inline-flex tw-items-center tw-text-sm tw-mb-6 tw-text-black-700 tw-font-medium"
        >
          <ArrowLeft className="tw-mr-2 tw-h-4 tw-w-4" /> Go Back
        </a>

        {/* Case Header */}
        <div className="tw-flex tw-items-center tw-gap-4 tw-mb-6">
          
          
        <div className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-full tw-bg-orange-500 tw-relative">
          <div className="tw-absolute tw-inset-1 tw-rounded-full tw-border-2 tw-border-white"></div>
          <span className="tw-text-white tw-text-2xl tw-font-lg">?</span>
        </div>


          <div>
            <h1 className="tw-text-lg tw-font-semibold tw-text-black-900">
              Case ID #PG12456 - Understanding Of AI Tool Edubot
            </h1>
            <p className="tw-text-sm tw-text-black-500">
              Date Opened: <span className="tw-font-medium">June 28, 2024 | 09:00 PM</span>
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[1fr,350px] tw-gap-6">
          {/* Message Card */}
          <Card className="tw-bg-white tw-shadow-lg tw-rounded-md tw-border">
            <CardContent className="tw-p-6 tw-mt-5">
              <div className="tw-space-y-4 tw-text-sm tw-text-black-700">
                <p>Hi,</p>
                <p>
                  I need help to access the AI Tool, kindly help me how to navigate through it.
                </p>
                <p>Thanks</p>
                <div className="tw-border-t tw-pt-4">
                  <p className="tw-font-medium">Regards</p>
                  <p>Scarlett Johansson</p>
                  <p className="tw-text-blue-600 tw-underline">scarlett@gmail.com</p>
                  <p>KLC Tech College</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visitor Information Card */}
          <Card className="tw-bg-white tw-shadow-lg tw-rounded-md tw-border">
            <CardHeader className="tw-p-6 tw-border-b">
              <h2 className="tw-text-sm tw-font-medium">Visitor Information</h2>
            </CardHeader>
            <CardContent className="tw-p-6 ">
              <div className="tw-space-y-4 tw-text-sm tw-text-black-700">
                <div className="tw-flex tw-justify-between">
                  <span className="tw-text-black-500">Unique ID</span>
                  <span>RTF456</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span className="tw-text-black-500">Name</span>
                  <span>Scarlett Johansson</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span className="tw-text-black-500">Email</span>
                  <span className="tw-text-blue-600 tw-underline">Scarlett@gmail.com</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span className="tw-text-black-500">Phone</span>
                  <span>+9123169042</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span className="tw-text-black-500">Organization</span>
                  <span>XYZ College</span>
                </div>
                <div className="tw-flex tw-justify-between">
                  <span className="tw-text-black-500">State</span>
                  <span>Andhra Pradesh</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="tw-flex tw-items-center tw-justify-between tw-mt-6">
          <div className="tw-flex tw-items-center tw-gap-3">
            <Button variant="outline" className="tw-h-10 tw-px-4 tw-text-sm tw-font-medium tw-border-black-300">
              Mark Closed
            </Button>
            <Button variant="outline" className="tw-h-10 tw-px-4 tw-text-sm tw-font-medium tw-border-black-300">
              Mark as Under Progress
            </Button>
            <div className="tw-flex tw-items-center tw-gap-2 tw-bg-white tw-rounded-md tw-ml-3 tw-pl-3 tw-py-2">
  <span className="tw-text-sm tw-text-black-500 tw-border-black-300 tw-border-black-700 tw-rounded-md tw-whitespace-nowrap">
    Assign to
  </span>
  <span className="tw-text-black-400">|</span>
  <Input className="tw-w-[210px] tw-h-10 tw-text-sm" placeholder="Write the name of person" />
</div>
          </div>
          <Button variant="outline" className="tw-h-10 tw-px-4 tw-text-sm tw-font-medium   tw-rounded-md ">
            <Plus className="tw-h-4 tw-w-4 tw-mr-2" /> Add Comments
          </Button>


          



        </div>
      </div>
    </div>
  ),
});