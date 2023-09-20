import React from "react";
import "./styles/App.css";

export const columns = [
  {
    Header: 'Referral Event',
    accessor: (row) => (
      <div className="">
        <b>{row.event}</b>
        <div className="grey">{row.date}</div>
        <b>${row.price.toFixed(2)}</b>
      </div>
    )
  },
  {
    Header: 'Advocate Email',
    accessor: (row) => (
      <div className="cell">
        <b>{row.advocate.email}</b>
        <div className="black normal">
          {row.advocate.stringAdvocate}
        </div>
      </div>
    )
  },
  {
    Header: 'Friend Email',
    accessor: (row) => (
      <div className="cell">
        <b>{row.friends.email}</b>
        <div className="black normal">
          {row.friends.stringFriend}
        </div>
      </div>
    )
  },
  {
    Header: 'Referral Status',
    accessor: (row) => {
      if (row.refStatus.action === 'Marked as fraud') {
        return (
          <div className="cell">
            <div className="black">
              {row.refStatus.status}
            </div>
            <div className="action smallerFont">
              <b>{row.refStatus.action}</b>
            </div>
          </div>
        )
      } else {
        return (
          <div className="cell">
            <div className="black">
              {row.refStatus.status}
            </div>
            <div className="grey">
              {row.refStatus.action}
            </div>
          </div>
        )
      }
    }
  }
];

export const data = [
  {
    id: 1,
    event: 'Purchase',
    date: '06/17/2020 at 7:13 PM',
    price: 120,
    email: 'email1@example.com',
    advocate: {
      email: 'advocate1@example.com',
      stringAdvocate: 'Advocate',
    },
    friends: {
      email: 'friend1@example.com',
      stringFriend: 'Friend',
    },
    refStatus: {
      status: "Pending",
      action: "Passed fraud checks"
    }
  },
  {
    id: 2,
    event: 'Purchase',
    date: '07/10/2020 at 4:05 AM PDT',
    price: 100,
    email: 'email2@example.com',
    advocate: {
      email: 'advocate2@example.com',
      stringAdvocate: 'Advocate',
    },
    friends: {
      email: 'friend3@example.com',
      stringFriend: 'Friend',
    },
    refStatus: {
      status: "Flagged",
      action: "Marked as fraud"
    }
  },
  {
    id: 3,
    event: 'Purchase',
    date: '06/09/2020 at 12:42 PM PDT',
    price: 28,
    email: 'email3@example.com',
    advocate: {
      email: 'advocate3@example.com',
      stringAdvocate: 'Advocate',
    },
    friends: {
      email: 'friend5@example.com',
      stringFriend: 'Friend',
    },
    refStatus: {
      status: "Approved",
      action: "Passed fraud checks"
    }
  },
  {
    id: 4,
    event: 'Purchase',
    date: '08/07/2020 at 4:20 AM PDT',
    price: 100,
    email: 'email4@example.com',
    advocate: {
      email: 'advocate4@example.com',
      stringAdvocate: 'Advocate',
    },
    friends: {
      email: 'friend7@example.com',
      stringFriend: 'Friend',
    },
    refStatus: {
      status: "Blocked",
      action: "Marked as fraud"
    }
  },
  {
    id: 5,
    event: 'Purchase',
    date: '06/09/2020 at 2:08 AM PDT',
    price: 100,
    email: 'email5@example.com',
    advocate: {
      email: 'advocate5@example.com',
      stringAdvocate: 'Advocate',
    },
    friends: {
      email: 'friend9@example.com',
      stringFriend: 'Friend',
    },
    refStatus: {
      status: "Voided",
      action: "Marked as fraud"
    }
  },
];