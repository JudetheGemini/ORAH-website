import { Card, CardContent } from "@/components/ui/card"

export default function StatsBlock() {
  return (
    <Card className="w-full bg-white dark:bg-gray-950">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">600+</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Community Members</p>
          </div>
          <div className="space-y-2 md:border-x md:px-8 border-gray-200 dark:border-gray-800">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">11+</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Workshops Held</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">6</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Policy Briefs Published</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
