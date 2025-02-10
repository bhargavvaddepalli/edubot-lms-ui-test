import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

export default function SupportTicket() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <div className="border-b bg-white">
        <div className="flex items-center h-14 max-w-[1400px] mx-auto px-8">
          <nav className="flex items-center gap-1">
            <button className="px-4 py-2 text-[15px] text-gray-600 hover:text-gray-900">Dashboard</button>
            <span className="text-gray-300">|</span>
            <button className="px-4 py-2 text-[15px] text-gray-600 hover:text-gray-900">Website</button>
            <span className="text-gray-300">|</span>
            <button className="px-4 py-2 text-[15px] text-gray-600 hover:text-gray-900">Support</button>
          </nav>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 py-6">
        {/* Back Button */}
        <Link href="#" className="inline-flex items-center text-[14px] mb-8 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>

        {/* Case Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-orange-500 text-lg">?</span>
          </div>
          <div>
            <h1 className="text-[22px] font-medium text-gray-900 border-b border-gray-200 pb-4 mb-4">
              Case ID #PG12456 - Understanding Of AI Tool Edubot
            </h1>
            <div className="text-[14px] text-gray-500">Date Opened : June 28, 2024 | 09:00 PM</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,380px] gap-8">
          {/* Message Card */}
          <Card className="shadow-sm">
            <CardContent className="p-8">
              <div className="space-y-5 text-[15px]">
                <p>Hi,</p>
                <p>I need help to access the AI Tool, kindly help me how to navigate through it.</p>
                <p>Thanks</p>
                <div className="pt-4">
                  <p className="font-medium">Regards</p>
                  <p>Scarlett Johansson</p>
                  <p className="text-blue-600">scarlett@gmail.com</p>
                  <p>KLC Tech Collage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visitor Information Card */}
          <Card className="shadow-sm h-fit">
            <CardHeader className="px-8 py-6">
              <h2 className="text-[16px] font-medium">Visitor information</h2>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-5">
                <div className="grid grid-cols-[140px,1fr] text-[14px] gap-2">
                  <div className="text-gray-500">Unique ID</div>
                  <div>RTF456</div>
                </div>
                <div className="grid grid-cols-[140px,1fr] text-[14px] gap-2">
                  <div className="text-gray-500">Name</div>
                  <div>Scarlett Johansson</div>
                </div>
                <div className="grid grid-cols-[140px,1fr] text-[14px] gap-2">
                  <div className="text-gray-500">Email</div>
                  <div>Scarlett@gmail.com</div>
                </div>
                <div className="grid grid-cols-[140px,1fr] text-[14px] gap-2">
                  <div className="text-gray-500">Phone</div>
                  <div>+9123169042</div>
                </div>
                <div className="grid grid-cols-[140px,1fr] text-[14px] gap-2">
                  <div className="text-gray-500">Organization</div>
                  <div>XYZ Collage</div>
                </div>
                <div className="grid grid-cols-[140px,1fr] text-[14px] gap-2">
                  <div className="text-gray-500">State</div>
                  <div>Andhra Pradesh</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="h-10 px-4 text-[14px] font-medium">
              Mark Closed
            </Button>
            <Button variant="outline" className="h-10 px-4 text-[14px] font-medium">
              Mark as Under Progress
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-gray-500">Assign to</span>
              <Input className="w-[240px] h-10 text-[14px]" placeholder="Write the name of person" />
            </div>
          </div>
          <Button className="h-10 px-4 text-[14px] font-medium">
            <Plus className="h-4 w-4 mr-2" />
            Add Comments
          </Button>
        </div>
      </div>
    </div>
  )
}

