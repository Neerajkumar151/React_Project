import React from 'react';

const creators = [
  {
    name: 'Sarah Jenkins',
    handle: '@sarah_create',
    followers: '850k',
    Reactions: '1.2M',
    isVerified: true,
    bannerGradient: 'from-blue-500 to-indigo-600',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVjsbD-88_6cDBypDfK2XFQfN1i3La1D0Y5GOg5TLsukUq202rJktLe6-cmHnHXW75Hwy6WDmLwsc2A_QX9TeB7SHGiW1n0BRkP5DzoZJ7Kwgo2R-09a_f4yDxWpnYdF8pDn-T_L4pyWDMtVKAGOd2Z9LMv_J_2keJCI8QTM4oKjmw2iJGcAd5u_uRtvn-Z6pDLi4dz1CRVLW4S91OWKNAWMj4cyT4r09jHM0jBQTS4OqG27Zy93NqfhyvlS_Fh5yAAwyEFuDu9xWL'
  },
  {
    name: 'Marcus Chen',
    handle: '@mchen_tech',
    followers: '1.4M',
    Reactions: '5.8M',
    isVerified: true,
    bannerGradient: 'from-purple-500 to-pink-600',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgjJA0RIfjQLZ5DOmi6NwXfI_bYoHGS4mzJ0F-ezll8dS8edEK7sN0FlJGs8_od3eGrWIivbNHeMxyFUxYseD-8o4t8wkBbL4yXj4dzxuHqXhJQ732zdfYyNY-IlSeGT1Uhzc9iZSvbLphHawaMdqbHO7o4lZnlQu8BEdLRXSD0aKtgQEowktI_-1j6lEadE7B_xeHWH-qKf14N2pU_cMwEqLGp-c2T8wFHavP84Nw6lFHSusVBIxZ-5-01gyE1ER_Wzin9UPVjQjx'
  },
  {
    name: 'Elena Rodriguez',
    handle: '@elena_vision',
    followers: '240k',
    Reactions: '890k',
    isVerified: false,
    bannerGradient: 'from-emerald-400 to-teal-500',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS-Lf6qYSFky33Eo5reA83x7epHSQpsx52zpjqDOrUmmlm4Z2shM6yLL8djwOkwkYE8L7-oJazyJ9e8XR4f4OTeF2RmzndqiemgobC-mAQoxxyqg-vTRfXyUC9AVqauLJ71nA0PFZHH8c475FgruJiQ-CnhcNJLBl4UTZoXfEFiex_ZAf1n6xq8a7NhDUOjnlJqkNh4872fKf_Myj2xuTfWgzDpQ2WYiih4puCS1UmAwvh_ZFx6yW1yYItOyPgihWRb3JSZHsMbjcn'
  }
];

const FeaturedCreators = () => {
  return (
    <section className="mt-10 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Featured Creators</h3>
        <button className="text-sm font-bold text-primary hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator, index) => (
          <div 
            key={index} 
            className="rounded-xl overflow-hidden flex flex-col transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(53,37,205,0.15)] cursor-pointer group"
            style={{ 
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            {/* Banner */}
            <div className={`h-24 bg-gradient-to-r ${creator.bannerGradient} relative transition-transform duration-700 ease-out group-hover:scale-105 origin-bottom`}></div>
            
            {/* Profile Content */}
            <div className="px-6 pb-6 -mt-10 flex flex-col items-center text-center relative z-10">
              {/* Avatar */}
              <div className="relative mb-3">
                <img 
                  alt={creator.name} 
                  className="w-20 h-20 rounded-full border-4 object-cover" 
                  style={{ borderColor: 'var(--color-bg-surface)' }}
                  src={creator.avatar} 
                />
                {creator.isVerified && (
                  <span 
                    className="material-symbols-outlined absolute bottom-0 right-0 bg-primary text-white text-[16px] p-0.5 rounded-full border-2" 
                    style={{ fontVariationSettings: "'FILL' 1", borderColor: 'var(--color-bg-surface)' }}
                  >
                    verified
                  </span>
                )}
              </div>
              
              <h4 className="font-bold text-lg mb-0.5" style={{ color: 'var(--color-text-primary)' }}>{creator.name}</h4>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{creator.handle}</p>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 w-full mb-6">
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{creator.followers}</p>
                  <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>Followers</p>
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{creator.Reactions}</p>
                  <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>Reactions</p>
                </div>
              </div>
              
              <button className="w-full py-2 bg-primary text-white rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 text-sm">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCreators;
