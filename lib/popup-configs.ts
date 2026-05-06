import { Calendar, MapPin, Users, DollarSign, GraduationCap, Briefcase, Heart } from 'lucide-react'

// Example configurations for different events

export const aiForAllPopupConfig = {
    eventId: 'ai-for-all-2026',
    badge: 'NEW PROGRAM',
    title: 'AI for All: Empowering Seniors',
    description: 'Join our youth volunteer program helping seniors learn about AI and stay safe online',
    details: [
        { icon: Calendar, text: '8 weeks • May 8 – June 26, 2026' },
        { icon: MapPin, text: 'Abbotsford Centre, Ottawa' },
        { icon: Users, text: 'For high school & post-secondary students' }
    ],
    benefitsTitle: 'What You\'ll Gain:',
    benefits: [
        'Volunteer hours & community impact',
        'Cross-generational mentoring experience',
        'AI literacy & digital safety skills'
    ],
    primaryAction: {
        text: 'Join Program',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd5JqbePX6G4qgw9sKoz_GOiUTbPND3oHa4Hy35t7uKAT_ZmQ/viewform',
        external: true
    },
    secondaryAction: {
        text: 'Learn More',
        url: '/programs/ai-for-all',
        external: false
    }
}

export const summitPopupConfig = {
    eventId: 'ai-summit-2026',
    badge: 'EARLY BIRD',
    title: 'Ottawa Responsible AI Summit 2026',
    description: 'Join policymakers, developers, and community voices exploring the future of ethical AI',
    details: [
        { icon: Calendar, text: 'March 15-16, 2026' },
        { icon: MapPin, text: 'Shaw Centre, Ottawa' },
        { icon: Users, text: '500+ attendees expected' },
        { icon: DollarSign, text: 'Early bird: $99 (Regular: $149)' }
    ],
    benefitsTitle: 'What\'s Included:',
    benefits: [
        '2 days of expert keynotes & panels',
        'Networking with AI leaders',
        'Workshop sessions & certification',
        'Lunch & refreshments included'
    ],
    primaryAction: {
        text: 'Register Now',
        url: 'https://summit.responsibleaiottawa.ca/register',
        external: true
    },
    secondaryAction: {
        text: 'View Agenda',
        url: '/events/summit-2026',
        external: false
    },
    gradientFrom: '#003366',
    gradientTo: '#00C4A7'
}

export const workshopPopupConfig = {
    eventId: 'ai-ethics-workshop-feb-2026',
    badge: 'LIMITED SPOTS',
    title: 'AI Ethics Workshop for Developers',
    description: 'Hands-on workshop on implementing ethical AI practices in your development workflow',
    details: [
        { icon: Calendar, text: 'February 20, 2026 • 9 AM - 4 PM' },
        { icon: MapPin, text: 'Shopify Ottawa Office' },
        { icon: Users, text: 'Max 25 participants' },
        { icon: GraduationCap, text: 'Certificate provided' }
    ],
    benefitsTitle: 'You\'ll Learn:',
    benefits: [
        'Bias detection & mitigation techniques',
        'Ethical AI frameworks & tools',
        'Real-world case studies',
        'Actionable implementation strategies'
    ],
    primaryAction: {
        text: 'Reserve Spot',
        url: '/workshops/ai-ethics/register',
        external: false
    },
    secondaryAction: {
        text: 'More Info',
        url: '/workshops/ai-ethics',
        external: false
    },
    gradientFrom: '#8B5CF6',
    gradientTo: '#3B82F6'
}

export const jobFairPopupConfig = {
    eventId: 'ai-job-fair-2026',
    badge: 'FREE EVENT',
    title: 'AI & Tech Job Fair Ottawa',
    description: 'Connect with top employers hiring for AI, ML, and tech roles in the Ottawa region',
    details: [
        { icon: Calendar, text: 'April 10, 2026 • 10 AM - 6 PM' },
        { icon: MapPin, text: 'EY Centre, Ottawa' },
        { icon: Briefcase, text: '50+ companies participating' },
        { icon: Users, text: 'All experience levels welcome' }
    ],
    benefitsTitle: 'What to Expect:',
    benefits: [
        'On-site interviews & networking',
        'Resume review sessions',
        'Career development workshops',
        'Free professional headshots'
    ],
    primaryAction: {
        text: 'Register Free',
        url: '/events/job-fair/register',
        external: false
    },
    secondaryAction: {
        text: 'View Companies',
        url: '/events/job-fair/companies',
        external: false
    },
    gradientFrom: '#10B981',
    gradientTo: '#059669'
}

export const fundraiserPopupConfig = {
    eventId: 'orah-fundraiser-2026',
    badge: 'SUPPORT ORAH',
    title: 'Help Us Expand AI Education',
    description: 'Support our mission to make AI education accessible to all communities in Ottawa',
    details: [
        { icon: Heart, text: 'Goal: $50,000 for new programs' },
        { icon: Users, text: 'Impact: 1,000+ community members' },
        { icon: Calendar, text: 'Campaign ends March 31, 2026' }
    ],
    benefitsTitle: 'Your Impact:',
    benefits: [
        '$25 - Provides materials for 1 senior',
        '$100 - Sponsors 1 workshop session',
        '$500 - Funds 1 complete program cycle'
    ],
    primaryAction: {
        text: 'Donate Now',
        url: '/donate',
        external: false
    },
    secondaryAction: {
        text: 'Learn More',
        url: '/about/impact',
        external: false
    },
    gradientFrom: '#EF4444',
    gradientTo: '#DC2626'
}