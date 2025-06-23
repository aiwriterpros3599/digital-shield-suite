
export interface HelpArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  readTime: string;
  lastUpdated: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      steps?: string[];
      tips?: string[];
      troubleshooting?: string[];
    }[];
    conclusion: string;
  };
  relatedArticles: string[];
}

export const helpCategories = {
  'getting-started': 'Getting Started',
  'ai-content-humanizer': 'AI Content Humanizer',
  'ai-image-verification': 'AI Image Verification',
  'content-theft-scanner': 'Content Theft Scanner',
  'account-management': 'Account Management',
  'technical-support': 'Technical Support'
};

export const helpArticles: HelpArticle[] = [
  // Getting Started Articles
  {
    id: 'how-to-create-your-account',
    title: 'How to Create Your Account',
    slug: 'how-to-create-your-account',
    category: 'getting-started',
    description: 'Complete account creation walkthrough for new users',
    readTime: '3 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'Creating your Brand Protection Toolkit account is quick and easy. Follow this step-by-step guide to get started with protecting your content.',
      sections: [
        {
          title: 'Registration Process',
          content: 'Start by visiting our signup page and providing your basic information.',
          steps: [
            'Go to the signup page by clicking "Get Started" or "Sign Up"',
            'Enter your email address and create a secure password',
            'Provide your full name and company information',
            'Choose your initial plan (Free trial available)',
            'Click "Create Account" to complete registration'
          ]
        },
        {
          title: 'Email Verification',
          content: 'After registration, you\'ll need to verify your email address.',
          steps: [
            'Check your email inbox for a verification message',
            'Click the verification link in the email',
            'You\'ll be redirected to your dashboard once verified'
          ]
        }
      ],
      conclusion: 'Congratulations! Your account is now set up and ready to use. Next, explore our dashboard overview guide to familiarize yourself with the interface.'
    },
    relatedArticles: ['account-verification-process', 'dashboard-overview-and-navigation', 'getting-started-tutorial']
  },
  {
    id: 'account-verification-process',
    title: 'Account Verification Process',
    slug: 'account-verification-process',
    category: 'getting-started',
    description: 'Email and phone verification steps for account security',
    readTime: '2 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'Account verification ensures the security of your account and enables all platform features.',
      sections: [
        {
          title: 'Email Verification',
          content: 'Email verification is required for all accounts and enables password recovery.',
          steps: [
            'Check your email immediately after signup',
            'Look for an email from "Brand Protection Toolkit"',
            'Click the "Verify Email" button in the message',
            'If you don\'t see the email, check your spam folder'
          ]
        },
        {
          title: 'Phone Verification (Optional)',
          content: 'Phone verification adds an extra layer of security and is required for Business plans.',
          steps: [
            'Go to Account Settings > Security',
            'Click "Add Phone Number"',
            'Enter your phone number and click "Send Code"',
            'Enter the 6-digit code you receive via SMS'
          ]
        }
      ],
      conclusion: 'With your account verified, you can access all features and ensure your account remains secure.'
    },
    relatedArticles: ['how-to-create-your-account', 'account-settings-preferences']
  },
  {
    id: 'getting-started-tutorial',
    title: 'Getting Started: Your First 5 Minutes',
    slug: 'getting-started-tutorial',
    category: 'getting-started',
    description: '5-minute quick start guide to protect your content immediately',
    readTime: '5 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'Get up and running with Brand Protection Toolkit in just 5 minutes. This guide covers the essential first steps.',
      sections: [
        {
          title: 'Dashboard Overview',
          content: 'Your dashboard is the central hub for all brand protection activities.',
          steps: [
            'Access your dashboard after login',
            'Review the main navigation: Humanizer, Verification, Scanner',
            'Check your usage statistics in the sidebar',
            'Explore the recent activity feed'
          ]
        },
        {
          title: 'Try Your First Tool',
          content: 'Start with the AI Content Humanizer to see immediate results.',
          steps: [
            'Click "Humanizer" in the navigation',
            'Paste some AI-generated text in the input box',
            'Select your preferred style and tone',
            'Click "Humanize Content" and review the results'
          ]
        },
        {
          title: 'Set Up Content Monitoring',
          content: 'Protect your content by setting up automated monitoring.',
          steps: [
            'Navigate to the Content Scanner',
            'Add your website URL or paste content to monitor',
            'Configure monitoring frequency',
            'Enable email alerts for new matches'
          ]
        }
      ],
      conclusion: 'You\'re now ready to protect your brand with our comprehensive toolkit. Explore each tool in detail to maximize your protection.'
    },
    relatedArticles: ['dashboard-overview-and-navigation', 'how-to-use-content-humanizer', 'setting-up-content-monitoring']
  },
  
  // AI Content Humanizer Articles
  {
    id: 'how-to-use-content-humanizer',
    title: 'How to Use the Content Humanizer',
    slug: 'how-to-use-content-humanizer',
    category: 'ai-content-humanizer',
    description: 'Step-by-step guide to making AI content undetectable',
    readTime: '4 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'Transform AI-generated content into natural, human-like text with our advanced humanization technology.',
      sections: [
        {
          title: 'Input Your Content',
          content: 'Start by adding the content you want to humanize.',
          steps: [
            'Navigate to the Humanizer tool',
            'Paste your AI-generated text into the input field',
            'Review the character count (check your plan limits)',
            'Ensure content is in English for best results'
          ]
        },
        {
          title: 'Choose Your Settings',
          content: 'Select the appropriate style and tone for your content.',
          steps: [
            'Select writing style: Academic, Professional, Casual, or Creative',
            'Choose tone: Formal, Neutral, or Conversational',
            'Adjust creativity level: Conservative, Balanced, or Creative',
            'Review your selections before processing'
          ]
        },
        {
          title: 'Process and Review',
          content: 'Generate your humanized content and review the results.',
          steps: [
            'Click "Humanize Content" to start processing',
            'Wait for the AI to complete the transformation',
            'Review the humanized text for quality and accuracy',
            'Check the AI detection score improvement',
            'Download or copy the final result'
          ]
        }
      ],
      conclusion: 'Your content is now humanized and ready to use. Remember to always review the output for accuracy and relevance to your needs.'
    },
    relatedArticles: ['understanding-ai-detection-scores', 'best-practices-content-processing', 'character-limits-batch-processing']
  },
  {
    id: 'understanding-ai-detection-scores',
    title: 'Understanding AI Detection Scores',
    slug: 'understanding-ai-detection-scores',
    category: 'ai-content-humanizer',
    description: 'Learn how our AI detection algorithms work and interpret results',
    readTime: '5 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'AI detection scores help you understand how likely your content is to be flagged as AI-generated by detection tools.',
      sections: [
        {
          title: 'Score Ranges Explained',
          content: 'Our detection scores range from 0-100, with different implications for each range.',
          steps: [
            '0-20: Highly likely to be detected as AI-generated',
            '21-40: Likely to be flagged by most AI detectors',
            '41-60: Mixed results across different detection tools',
            '61-80: Low probability of AI detection',
            '81-100: Very unlikely to be detected as AI-generated'
          ]
        },
        {
          title: 'Factors Affecting Scores',
          content: 'Several factors influence how AI detection tools evaluate content.',
          tips: [
            'Repetitive sentence structures lower scores',
            'Technical jargon and formal language can trigger detection',
            'Lack of personal voice or opinion may seem AI-generated',
            'Perfect grammar without natural errors can be suspicious',
            'Generic or templated content patterns are easily detected'
          ]
        },
        {
          title: 'Improving Your Scores',
          content: 'Use these strategies to achieve better humanization results.',
          tips: [
            'Use varied sentence lengths and structures',
            'Include personal anecdotes or opinions where appropriate',
            'Add natural speech patterns and conversational elements',
            'Include intentional minor imperfections in writing style',
            'Use industry-specific terminology naturally'
          ]
        }
      ],
      conclusion: 'Understanding these scores helps you create content that passes AI detection while maintaining quality and readability.'
    },
    relatedArticles: ['how-to-use-content-humanizer', 'best-practices-content-processing']
  },

  // Content Theft Scanner Articles
  {
    id: 'generating-dmca-takedown-notices',
    title: 'How to Generate Effective DMCA Notices',
    slug: 'generating-dmca-takedown-notices',
    category: 'content-theft-scanner',
    description: 'Step-by-step guide to creating powerful takedown requests',
    readTime: '7 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'DMCA takedown notices are your legal tool for removing stolen content. Learn how to create effective notices that get results.',
      sections: [
        {
          title: 'When to Use DMCA Notices',
          content: 'Understanding when DMCA notices are appropriate and effective.',
          steps: [
            'Confirm you own the copyright to the content',
            'Verify the content was used without permission',
            'Ensure the infringing site is hosted in DMCA-compliant jurisdiction',
            'Document the original publication date and location'
          ]
        },
        {
          title: 'Required Information',
          content: 'Every DMCA notice must include specific legal information.',
          steps: [
            'Your contact information (name, address, phone, email)',
            'Description of your copyrighted work',
            'Location of the infringing material (URLs)',
            'Statement of good faith belief',
            'Statement that information is accurate',
            'Electronic signature'
          ]
        },
        {
          title: 'Using Our Generator',
          content: 'Our automated DMCA generator streamlines the process.',
          steps: [
            'Access DMCA Generator from scan results',
            'Review pre-filled information for accuracy',
            'Add any additional context or evidence',
            'Generate the professional notice',
            'Download and send to the appropriate party'
          ]
        }
      ],
      conclusion: 'Properly formatted DMCA notices have a high success rate. Always keep records of sent notices and responses.'
    },
    relatedArticles: ['setting-up-content-monitoring', 'understanding-similarity-scores']
  },

  // Account Management Articles  
  {
    id: 'upgrading-downgrading-plan',
    title: 'Upgrading or Downgrading Your Plan',
    slug: 'upgrading-downgrading-plan',
    category: 'account-management',
    description: 'Subscription management and plan changes',
    readTime: '3 min',
    lastUpdated: '2024-06-20',
    content: {
      introduction: 'Easily change your subscription plan to match your evolving brand protection needs.',
      sections: [
        {
          title: 'Upgrading Your Plan',
          content: 'Get access to more features and higher usage limits.',
          steps: [
            'Go to Account Settings > Billing',
            'Click "Upgrade Plan" next to your current plan',
            'Compare features and select your new plan',
            'Enter payment information if needed',
            'Confirm the upgrade - changes take effect immediately'
          ]
        },
        {
          title: 'Downgrading Your Plan',
          content: 'Reduce your plan if you need fewer features or lower limits.',
          steps: [
            'Navigate to Billing settings',
            'Click "Change Plan" and select a lower tier',
            'Review what features you\'ll lose',
            'Confirm the downgrade',
            'Changes take effect at your next billing cycle'
          ]
        }
      ],
      conclusion: 'Plan changes are prorated, so you only pay for what you use. Contact support if you need assistance with plan selection.'
    },
    relatedArticles: ['managing-billing-information', 'usage-limits-and-quotas']
  }
];

export const popularArticles = [
  {
    title: "Getting Started: Your First 5 Minutes",
    description: "Quick setup guide to get you protecting your content immediately",
    slug: "getting-started-tutorial",
    category: "Getting Started",
    readTime: "5 min"
  },
  {
    title: "How to Generate Effective DMCA Notices", 
    description: "Step-by-step guide to creating powerful takedown requests",
    slug: "generating-dmca-takedown-notices",
    category: "Content Theft Scanner",
    readTime: "7 min"
  },
  {
    title: "Understanding AI Detection Scores",
    description: "Learn how our AI detection algorithms work and interpret results",
    slug: "understanding-ai-detection-scores", 
    category: "AI Content Humanizer",
    readTime: "5 min"
  },
  {
    title: "Reading Forensic Analysis Reports",
    description: "Professional techniques for identifying manipulated images",
    slug: "reading-forensic-analysis-reports",
    category: "AI Image Verification",
    readTime: "8 min"
  }
];

export const faqs = [
  {
    question: "How accurate is the AI detection?",
    answer: "Our AI detection tools achieve 99.5% accuracy across all content types. We continuously update our algorithms to stay ahead of new AI models and manipulation techniques."
  },
  {
    question: "What file formats are supported for image verification?",
    answer: "We support JPG, PNG, WebP, GIF, and TIFF formats up to 50MB per file. For best results, use high-resolution images with minimal compression."
  },
  {
    question: "How long does content monitoring take?",
    answer: "Initial scans complete within 24-48 hours. Ongoing monitoring provides real-time alerts as new matches are discovered across the web."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll retain access to all features until the end of your current billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for new subscribers. Enterprise customers may have different terms as specified in their agreement."
  },
  {
    question: "Is my uploaded content stored permanently?",
    answer: "No, content uploaded for analysis is processed and deleted immediately after analysis. We don't permanently store your sensitive content."
  }
];
