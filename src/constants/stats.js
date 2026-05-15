// Centralized dashboard stats data.
// `trendType` can be 'up' | 'down' | 'info' for future icon/color logic via utils.
export const stats = [
  {
    id: 'total-blogs',
    title: 'Total Blogs',
    value: '142',
    trend: '+12% from last month',
    trendType: 'up',
    icon: 'article',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'total-followers',
    title: 'Total Followers',
    value: '24.5K',
    trend: '+800 new this week',
    trendType: 'up',
    icon: 'group',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 'total-reactions',
    title: 'Total Reactions',
    value: '1.2M',
    trend: '1.1M Likes • 100K Dislikes',
    trendType: 'info',
    icon: 'favorite',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];
