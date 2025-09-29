import { BlogPost } from '@/types/blog';
import heroImage from '@/assets/hero-blog-image.jpg';
import blogPost1 from '@/assets/blog-post-1.jpg';
import blogPost2 from '@/assets/blog-post-2.jpg';
import blogPost3 from '@/assets/blog-post-3.jpg';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Unlocking Business Efficiency with SaaS Solutions',
    excerpt: 'Discover how modern SaaS platforms are revolutionizing business operations and driving unprecedented growth.',
    content: `
      In today's rapidly evolving business landscape, Software as a Service (SaaS) solutions have emerged as the cornerstone of digital transformation. Organizations across industries are embracing cloud-based platforms to streamline operations, reduce costs, and accelerate innovation.

      ## The SaaS Revolution

      The shift towards SaaS represents more than just a technological upgrade—it's a fundamental reimagining of how businesses operate. By leveraging cloud-based solutions, companies can:

      - **Scale Rapidly**: Adjust resources based on demand without infrastructure investments
      - **Reduce Costs**: Eliminate expensive hardware and maintenance overhead
      - **Enhance Collaboration**: Enable seamless teamwork across global teams
      - **Improve Security**: Benefit from enterprise-grade security measures
      - **Access Real-time Insights**: Make data-driven decisions with live analytics

      ## Key Benefits for Modern Businesses

      SaaS platforms offer unprecedented flexibility and efficiency. Organizations can deploy new solutions in days rather than months, enabling rapid response to market changes and customer needs.

      The subscription-based model also provides predictable costs and continuous updates, ensuring businesses always have access to the latest features and security improvements.

      ## Future Outlook

      As artificial intelligence and machine learning become increasingly integrated into SaaS platforms, we can expect even greater automation and intelligent insights to drive business efficiency in the coming years.
    `,
    author: {
      name: 'Jennifer Taylor',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-15',
    readTime: '5 min read',
    tags: ['Business', 'SaaS', 'Technology'],
    featured: true,
    imageUrl: heroImage,
    slug: 'unlocking-business-efficiency-saas-solutions'
  },
  {
    id: '2',
    title: 'Mastering UI Elements: A Practical Guide for Designers',
    excerpt: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
    content: `
      User interface design is both an art and a science. Creating interfaces that are not only visually appealing but also intuitive and functional requires a deep understanding of design principles, user psychology, and technical constraints.

      ## Core Design Principles

      Great UI design starts with understanding fundamental principles:

      - **Clarity**: Every element should have a clear purpose
      - **Consistency**: Maintain design patterns throughout the interface
      - **Hierarchy**: Guide users through logical information flow
      - **Feedback**: Provide clear responses to user actions
      - **Accessibility**: Ensure usability for all users

      ## Essential UI Components

      Modern interfaces rely on a toolkit of well-designed components:

      ### Navigation Elements
      - Primary navigation menus
      - Breadcrumbs and pagination
      - Search functionality
      - Action buttons and CTAs

      ### Content Organization
      - Cards and containers
      - Tables and lists
      - Modals and overlays
      - Form elements

      ## Best Practices

      When designing UI elements, consider the user's mental model and expectations. Consistency across similar elements reduces cognitive load and improves usability.

      Always test your designs with real users to validate assumptions and identify areas for improvement.
    `,
    author: {
      name: 'Jennifer Taylor',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-10',
    readTime: '3 min read',
    tags: ['Design', 'UI', 'UX'],
    featured: false,
    imageUrl: blogPost1,
    slug: 'mastering-ui-elements-practical-guide'
  },
  {
    id: '3',
    title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
    excerpt: 'Explore the principles and techniques that drive user-centric UI design, ensuring seamless and intuitive experiences.',
    content: `
      Creating truly intuitive user interfaces requires more than aesthetic appeal—it demands a deep understanding of human behavior, cognitive psychology, and interaction patterns.

      ## Understanding User Mental Models

      Users approach interfaces with preconceived notions based on their experiences with other digital products. Successful UI design leverages these mental models rather than fighting against them.

      ## The Role of Visual Hierarchy

      Effective visual hierarchy guides users through content naturally:

      - **Size and Scale**: Larger elements draw attention first
      - **Color and Contrast**: Strategic use of color highlights important actions
      - **Typography**: Font choices convey brand personality and hierarchy
      - **White Space**: Proper spacing improves readability and focus

      ## Interaction Design Patterns

      Familiar interaction patterns reduce learning curves:

      - Standard button behaviors and states
      - Predictable navigation structures
      - Conventional form layouts
      - Expected feedback mechanisms

      ## Testing and Iteration

      The best UI designs emerge through continuous testing and refinement. User feedback reveals gaps between designer intentions and user reality.

      Regular usability testing helps identify friction points and opportunities for improvement, ensuring interfaces evolve to meet changing user needs.
    `,
    author: {
      name: 'Jennifer Taylor',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-08',
    readTime: '5 min read',
    tags: ['Design', 'UX', 'Psychology'],
    featured: false,
    imageUrl: blogPost2,
    slug: 'crafting-seamless-experiences-intuitive-ui-design'
  },
  {
    id: '4',
    title: 'Beyond Aesthetics: The Power of Emotional UX Design',
    excerpt: 'Delve into the realm of emotional design and discover how incorporating empathy and psychology can create powerful user experiences.',
    content: `
      User experience design extends far beyond functional requirements and visual appeal. The most memorable and effective interfaces connect with users on an emotional level, creating lasting relationships between people and products.

      ## The Psychology of Digital Interactions

      Every interface element triggers emotional responses. Understanding these psychological principles enables designers to craft experiences that feel natural and satisfying.

      ## Emotional Design Principles

      ### 1. Visceral Level
      First impressions matter. Users form opinions about interfaces within milliseconds based on visual appeal and perceived quality.

      ### 2. Behavioral Level
      The usability and functionality of an interface directly impacts user satisfaction and emotional state.

      ### 3. Reflective Level
      Long-term relationships with products are built on meaningful experiences that align with user values and identity.

      ## Building Empathy Through Design

      Effective emotional design requires genuine empathy for users:

      - **User Research**: Deep understanding of user needs, fears, and motivations
      - **Persona Development**: Creating detailed user archetypes
      - **Journey Mapping**: Identifying emotional touchpoints throughout user interactions
      - **Accessibility Considerations**: Ensuring inclusive experiences for all users

      ## Measuring Emotional Impact

      Traditional metrics like conversion rates and task completion times tell only part of the story. Emotional design success requires measuring:

      - User satisfaction scores
      - Brand perception metrics
      - Customer loyalty indicators
      - Qualitative feedback analysis

      The future of UX design lies in creating products that not only function well but also make users feel understood, empowered, and delighted.
    `,
    author: {
      name: 'Ryan A.',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-05',
    readTime: '2 min read',
    tags: ['UX', 'Psychology', 'Design'],
    featured: false,
    imageUrl: blogPost3,
    slug: 'beyond-aesthetics-power-emotional-ux-design'
  },
  {
    id: '5',
    title: 'Revolutionizing Industries through SaaS Implementation',
    excerpt: 'Explore how Software as a Service is transforming traditional business models across various industries.',
    content: `
      The Software as a Service (SaaS) revolution is reshaping entire industries, from healthcare and finance to education and manufacturing. Organizations that embrace cloud-based solutions are gaining competitive advantages through increased agility, reduced costs, and enhanced innovation capabilities.

      ## Industry Transformation Examples

      ### Healthcare
      SaaS platforms are enabling secure patient data management, telemedicine capabilities, and streamlined administrative processes. Electronic health records, appointment scheduling, and billing systems are moving to the cloud.

      ### Financial Services
      Cloud-based solutions are powering digital banking, automated compliance reporting, and advanced analytics for risk management. Fintech companies are leading the charge with API-first, scalable platforms.

      ### Education
      Learning management systems, student information systems, and collaborative tools are transforming how educational institutions deliver content and manage operations.

      ## Key Implementation Strategies

      Successful SaaS implementation requires:

      - **Strategic Planning**: Align technology choices with business objectives
      - **Change Management**: Prepare teams for new workflows and processes
      - **Data Migration**: Ensure secure and accurate transfer of existing data
      - **Integration**: Connect new systems with existing infrastructure
      - **Training**: Equip users with necessary skills and knowledge

      ## Overcoming Common Challenges

      While SaaS adoption offers significant benefits, organizations often face challenges including:

      - Security and compliance concerns
      - Integration complexity
      - User adoption resistance
      - Vendor lock-in considerations

      Addressing these challenges proactively ensures successful implementation and long-term value realization.
    `,
    author: {
      name: 'Jennifer Taylor',
      avatar: '/api/placeholder/40/40'
    },
    publishedAt: '2024-01-03',
    readTime: '4 min read',
    tags: ['SaaS', 'Industry', 'Transformation'],
    featured: true,
    imageUrl: blogPost1,
    slug: 'revolutionizing-industries-saas-implementation'
  }
];

export const featuredPosts = mockBlogPosts.filter(post => post.featured);
export const recentPosts = mockBlogPosts.slice(0, 3);