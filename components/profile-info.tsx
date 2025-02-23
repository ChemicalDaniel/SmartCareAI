import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function ProfileInfo() {
  // In a real app, this data would come from an API or database
  const profile = {
    fname: "Jane",
    lname: "Doe",
    age: 35,
    address: "123 Main St, Springfield, IL",
    email: "sample@email.com",
    phone: "(555) 555-5555",
    height: "5'6\"",
    weight: "140 lbs",
    bloodType: "O+",
    BMI: 22.6,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <Label>Name:</Label>
            <span>{profile.fname} {profile.lname}</span>
          </div>
          <div className="flex justify-between">
            <Label>Age:</Label>
            <span>{profile.age}</span>
          </div>
          <div className="flex justify-between">
            <Label>Address:</Label>
            <span>{profile.address}</span>
          </div>
          <div className="flex justify-between">
            <Label>Email:</Label>
            <span>{profile.email}</span>
          </div>
          <div className="flex justify-between">
            <Label>Phone:</Label>
            <span>{profile.phone}</span>
          </div>
          <div className="flex justify-between">
            <Label>Height:</Label>
            <span>{profile.height}</span>
          </div>
          <div className="flex justify-between">
            <Label>Weight:</Label>
            <span>{profile.weight}</span>
          </div>
          <div className="flex justify-between">
            <Label>Blood Type:</Label>
            <span>{profile.bloodType}</span>
          </div>
          <div className="flex justify-between">
            <Label>BMI:</Label>
            <span>{profile.BMI}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

