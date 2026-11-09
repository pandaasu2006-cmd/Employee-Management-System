const employees = [
  {
    id: 1,
    name: "Rohan Sharma",
    email: "employee1@company.com",
    password: "123",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApiLUhlU0x0UfRQWgSQnb0Jh9KzieCXsxLoLo-suiXA&s=10",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page UI in Figma",
        taskDate: "2025-01-05",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve issue where login fails on mobile devices",
        taskDate: "2025-01-08",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        taskTitle: "Client Meeting Notes",
        taskDescription: "Prepare and share meeting notes with the team",
        taskDate: "2025-01-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 4,
        taskTitle: "Database Migration",
        taskDescription: "Migrate old database schema to new PostgreSQL setup",
        taskDate: "2025-01-12",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 5,
        taskTitle: "Update API Documentation",
        taskDescription: "Add missing endpoints to Swagger docs",
        taskDate: "2025-01-15",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@company.com",
    password: "123",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4Nk8yqE_-YzSBMk7sFNwmLNAJ99zyxtA9YEzgvLJiUbWf5-sk90woig&s=10",
    taskCount: { active: 1, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests for authentication module",
        taskDate: "2025-01-06",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize images for faster load time",
        taskDate: "2025-01-09",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure GitHub Actions for automated deployment",
        taskDate: "2025-01-11",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        taskTitle: "Team Standup Report",
        taskDescription: "Submit weekly standup summary report",
        taskDate: "2025-01-13",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "employee3@company.com",
    password: "123",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGt4q5Ye_9Ct6y5g95yI294XGoeuLJnt-wrmYGFc2wg&s=10",
    taskCount: { active: 2, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Refactor Navbar Component",
        taskDescription: "Convert class component to functional component",
        taskDate: "2025-01-04",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Create Newsletter Template",
        taskDescription: "Design HTML email template for monthly newsletter",
        taskDate: "2025-01-07",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        taskTitle: "Fix Payment Gateway Error",
        taskDescription: "Debug and resolve Razorpay integration issue",
        taskDate: "2025-01-09",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 4,
        taskTitle: "Update Privacy Policy",
        taskDescription: "Add GDPR compliance section to privacy policy page",
        taskDate: "2025-01-14",
        category: "Legal",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 5,
        taskTitle: "Mobile App Testing",
        taskDescription: "Test app functionality on iOS and Android devices",
        taskDate: "2025-01-16",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 6,
        taskTitle: "SEO Audit",
        taskDescription: "Analyze website SEO score and suggest improvements",
        taskDate: "2025-01-18",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "employee4@company.com",
    password: "123",
    profilePhoto: "https://t3.ftcdn.net/jpg/03/17/91/74/360_F_317917475_h4sM0jHpoLYNm4vfjtAL53Gx5yYWFbNn.jpg",
    taskCount: { active: 2, newTask: 2, completed: 2, failed: 1 },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Server Load Testing",
        taskDescription: "Run load tests to check server capacity under stress",
        taskDate: "2025-01-05",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Dark Mode Implementation",
        taskDescription: "Add dark mode toggle across the entire application",
        taskDate: "2025-01-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade npm packages to latest stable versions",
        taskDate: "2025-01-10",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Compile and analyze customer feedback survey results",
        taskDate: "2025-01-13",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 5,
        taskTitle: "Fix Sidebar Overflow Bug",
        taskDescription: "Resolve horizontal scroll issue on sidebar menu",
        taskDate: "2025-01-17",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 6,
        taskTitle: "Prepare Sprint Retrospective",
        taskDescription: "Document key takeaways from last sprint cycle",
        taskDate: "2025-01-19",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 7,
        taskTitle: "Integrate Google Analytics",
        taskDescription: "Add GA4 tracking code to all main pages",
        taskDate: "2025-01-21",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Ananya Reddy",
    email: "employee5@company.com",
    password: "123",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3rVztn2RWN4CRMMkIxqkKo8lzjE6BMaKeEEHdHVEaXcRS9B5kB2Zns&s=10",
    taskCount: { active: 3, newTask: 2, completed: 2, failed: 1 },
    tasks: [
      {
        taskNumber: 1,
        taskTitle: "Create Onboarding Flow",
        taskDescription: "Design step-by-step onboarding screens for new users",
        taskDate: "2025-01-06",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        taskTitle: "Fix Cart Total Calculation",
        taskDescription: "Correct bug where discount is not applied to cart total",
        taskDate: "2025-01-08",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 3,
        taskTitle: "Write Blog Post",
        taskDescription: "Draft blog post about upcoming product features",
        taskDate: "2025-01-11",
        category: "Content",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        taskTitle: "Accessibility Audit",
        taskDescription: "Check website compliance with WCAG accessibility standards",
        taskDate: "2025-01-14",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 5,
        taskTitle: "Setup Email Notifications",
        taskDescription: "Implement automated email alerts for task updates",
        taskDate: "2025-01-16",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 6,
        taskTitle: "Competitor Analysis Report",
        taskDescription: "Research and document competitor product features",
        taskDate: "2025-01-19",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 7,
        taskTitle: "UI Component Library",
        taskDescription: "Build reusable button and card components with Tailwind",
        taskDate: "2025-01-22",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 8,
        taskTitle: "Fix Notification Duplicate Bug",
        taskDescription: "Resolve issue causing duplicate push notifications",
        taskDate: "2025-01-24",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    name: "Vikram Singh",
    email: "admin@company.com",
    password: "123",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbKTgQsEUDtCzqfVjq2qJi50FRdHkWiuGqtq47xbGFQ&s=10"
  },
  {
    id: 1,
    name: "Preetam Kumar Panda",
    email: "preetam@company.com",
    password: "123",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAAh5mT1Dung3NX4f_eiZr4Tv3_TdlwTMB2Gyf4tB9w&s=10"
  }
]

export const setlocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}