import type { ActivityConfig } from '@/types/activity'
import { activity01 } from '@/activities/level-1/activity-01'
import { activity02 } from '@/activities/level-1/activity-02'
import { activity03 } from '@/activities/level-1/activity-03'
import { activity04 } from '@/activities/level-1/activity-04'
import { activity05 } from '@/activities/level-1/activity-05'
import { activity06 } from '@/activities/level-1/activity-06'
import { activity07 } from '@/activities/level-5/activity-07'
import { activity09 } from '@/activities/level-5/activity-09'
import { activity10 } from '@/activities/level-2/activity-10'
import { activity11 } from '@/activities/level-2/activity-11'
import { activity12 } from '@/activities/level-2/activity-12'
import { activity14 } from '@/activities/level-2/activity-14'
import { activity15 } from '@/activities/level-2/activity-15'
import { activity16 } from '@/activities/level-3/activity-16'
import { activity18 } from '@/activities/level-3/activity-18'
import { activity19 } from '@/activities/level-3/activity-19'

const activities: Record<string, ActivityConfig> = {
  'activity-01': activity01,
  'activity-02': activity02,
  'activity-03': activity03,
  'activity-04': activity04,
  'activity-05': activity05,
  'activity-06': activity06,
  'activity-07': activity07,
  'activity-09': activity09,
  'activity-10': activity10,
  'activity-11': activity11,
  'activity-12': activity12,
  'activity-14': activity14,
  'activity-15': activity15,
  'activity-16': activity16,
  'activity-18': activity18,
  'activity-19': activity19,
}

export function getActivityConfig(activityId: string): ActivityConfig | null {
  return activities[activityId] ?? null
}
