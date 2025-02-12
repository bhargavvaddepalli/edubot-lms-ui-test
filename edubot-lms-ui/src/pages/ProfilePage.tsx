import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-6 text-sm text-gray-600">
          Home &gt; Profile &gt; Settings &gt; My profile
        </nav>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg font-medium">My profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-[250px_1fr] gap-8">
              {/* Left Column - Profile Info */}
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/api/placeholder/128/128" alt="Profile" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold">Rahul kumar</h2>
                    <p className="text-gray-600">Data researcher</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-600">Student ID : user1@123456</p>
                    <Button variant="link" className="text-blue-600 p-0 h-auto">
                      Change Password
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Fields */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">First Name</label>
                    <Input defaultValue="Rahul" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Last Name</label>
                    <Input defaultValue="kumar" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Email address</label>
                  <Input defaultValue="Rahul.kumar@gmail.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Phone no.</label>
                  <div className="flex">
                    <div className="flex items-center px-3 border rounded-l bg-white">
                      <img src="/api/placeholder/24/16" alt="IN" className="w-6 h-4" />
                    </div>
                    <Input className="rounded-l-none" defaultValue="+91 7352178373" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Language known</label>
                  <Input defaultValue="English, Hindi" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Full Address</label>
                  <Input className="h-24" 
                    defaultValue="Sirian Overseas Educare Pvt Ltd, 54-13/5-6, 3rd Floor, MK Aura, Road No. 2, Mahanadu Rd, Srinivasa Nagar Bank Colony, Vijayawada, Andhra Pradesh 520008" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">LinkedIn Profile link</label>
                  <Input defaultValue="https://www.linkedin.com/feed/" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm">Git hub link</label>
                  <Input defaultValue="Githublink.com" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Education - HSC</h3>
                  <div className="space-y-2">
                    <label className="text-sm">School</label>
                    <Input defaultValue="Kendriya Vidyalaya" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Subject Specialization</label>
                    <Input defaultValue="Physics, Chemistry, Maths" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Mention year</label>
                    <Input defaultValue="2017-2021" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Education - University or college</h3>
                  <div className="space-y-2">
                    <label className="text-sm">College</label>
                    <Input defaultValue="KLC Tech college" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Subject Specialization</label>
                    <Input defaultValue="Bachelor of Technology" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Mention year</label>
                    <Input defaultValue="2017-2021" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-900 hover:bg-blue-800">Update</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;