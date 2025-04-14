import React from 'react'
import styles from '../styles/Routers.module.css'
import News from './News'
export default function QuickAccess() {
  const portalActions = [
    { id: 1, title: "Request Asset", iconURL: "https://example.com/icons/request-asset.png" },
    { id: 2, title: "Raise Ticket", iconURL: "https://example.com/icons/raise-ticket.png" },
    { id: 3, title: "Upload Resume", iconURL: "https://example.com/icons/upload-resume.png" },
    { id: 4, title: "Medi Assist", iconURL: "https://example.com/icons/medi-assist.png" },
    { id: 5, title: "Check Leave", iconURL: "https://example.com/icons/check-leave.png" },
    { id: 6, title: "Apply Leaves", iconURL: "https://example.com/icons/apply-leaves.png" },
    { id: 7, title: "Expense Claim", iconURL: "https://example.com/icons/expense-claim.png" },
    { id: 8, title: "Book Meeting Room", iconURL: "https://example.com/icons/book-room.png" },
    { id: 9, title: "View Payslip", iconURL: "https://example.com/icons/view-payslip.png" },
    { id: 10, title: "Company Policies", iconURL: "https://example.com/icons/company-policies.png" },
    { id: 11, title: "Employee Directory", iconURL: "https://example.com/icons/employee-directory.png" },
    { id: 12, title: "Training Portal", iconURL: "https://example.com/icons/training-portal.png" },
    { id: 13, title: "Timesheet Entry", iconURL: "https://example.com/icons/timesheet-entry.png" },
    { id: 14, title: "IT Support", iconURL: "https://example.com/icons/it-support.png" },
    { id: 15, title: "Holiday Calendar", iconURL: "https://example.com/icons/holiday-calendar.png" }
  ];
  
  const learningActions = [
    {
      id: 1,
      title: "View Learning Plan",
      iconURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      id: 2,
      title: "Continue Course",
      iconURL: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
    },
    {
      id: 3,
      title: "Daily Quiz",
      iconURL: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
    },
    {
      id: 4,
      title: "Track Progress",
      iconURL: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
    },
    {
      id: 5,
      title: "Upcoming Webinars",
      iconURL: "https://cdn-icons-png.flaticon.com/512/2942/2942843.png"
    },
    {
      id: 6,
      title: "Download Certificate",
      iconURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      id: 7,
      title: "Skill Assessment",
      iconURL: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
    },
    {
      id: 8,
      title: "Browse Courses",
      iconURL: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
    },
    {
      id: 9,
      title: "Learning Reminders",
      iconURL: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
    },
    {
      id: 10,
      title: "Leaderboard",
      iconURL: "https://cdn-icons-png.flaticon.com/512/2942/2942843.png"
    },
    {
      id: 11,
      title: "Saved Resources",
      iconURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
      id: 12,
      title: "Mentor Chat",
      iconURL: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
    },
    {
      id: 13,
      title: "Analytics Dashboard",
      iconURL: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
    },
    {
      id: 14,
      title: "Assignments",
      iconURL: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
    },
    {
      id: 15,
      title: "Enroll in Program",
      iconURL: "https://cdn-icons-png.flaticon.com/512/2942/2942843.png"
    }
  ];
  return (
    <>
    <div className={styles.quickaccessLayout}>

        <div className={styles.actionsLayout}>
          <div className={styles.actionsHeading}>Learning Actions</div>
          <div className={styles.actionsCardLayout}>
          {learningActions.map((item) => {
            return(
              <div key={item.id} className={styles.card}>
              <img src={item.iconURL} alt='icon'/>
              <p>{item.title}</p>
            </div>
            )
          })}
          </div>
        </div>


        <div className={styles.actionsLayout}>
          <div className={styles.actionsHeading}>Portal Actions</div>
          <div className={styles.actionsCardLayout}>
          {portalActions.map((item) => {
            return(
              <div key={item.id} className={styles.card}>
              <img src={item.iconURL} alt='icon'/>
              <p>{item.title}</p>
            </div>
            )
          })}
          </div>
        </div>
        </div>
    </>

  )
}
