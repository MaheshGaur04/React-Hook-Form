import { DollarSign, Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function MetricCards() {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '₹45,231.89',
      change: '+20.1% from last month',
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: 'Subscriptions',
      value: '+2,350',
      change: '+180.1% from last month',
      isPositive: true,
      icon: Users,
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19% from last month',
      isPositive: true,
      icon: CreditCard,
    },
    {
      title: 'Active Now',
      value: '+573',
      change: '-2.4% since last hour',
      isPositive: false,
      icon: Activity,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-gray-500">
              <span className="text-xs font-semibold tracking-wider uppercase">{item.title}</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Icon size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">{item.value}</h3>
              <div className="flex items-center gap-1 mt-1 text-xs">
                {item.isPositive ? (
                  <ArrowUpRight size={14} className="text-green-600" />
                ) : (
                  <ArrowDownRight size={14} className="text-red-500" />
                )}
                <span className={item.isPositive ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
                  {item.change}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}