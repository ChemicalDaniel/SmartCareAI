import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function ProfileInfo() {
  // In a real app, this data would come from an API or database
  const profile = {
    name: "Jane Doe",
    age: 35,
    height: 1.6764,
    weight: 63.5029,
    bloodType: "O+",
    bmi: 22.6
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
            <span>{profile.name}</span>
          </div>
          <div className="flex justify-between">
            <Label>Age:</Label>
            <span>{profile.age}</span>
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
           <div className= "flex justify-between">
            <Label>BMI:</Label>
            <span>{profile.bmi}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
