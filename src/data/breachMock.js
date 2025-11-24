export const checkEmailBreach = (email) => {
  // Mock breach database
  const breachedEmails = [
    'test@example.com',
    'user@test.com',
    'demo@email.com',
    'sample@breach.com',
  ];

  const isBreached = breachedEmails.some(
    (breachedEmail) => breachedEmail.toLowerCase() === email.toLowerCase()
  );

  if (isBreached) {
    return {
      breached: true,
      message: 'Your email address was found in one or more data breaches. Take immediate action to secure your accounts.',
      breaches: [
        {
          name: 'MegaCorp Data Leak 2024',
          date: 'January 2024',
          description: 'A massive data breach affecting 50 million users worldwide. Customer data including emails, passwords, and personal information was exposed.',
          compromisedData: ['Email', 'Password', 'Name', 'Phone Number'],
        },
        {
          name: 'SocialNet Breach 2023',
          date: 'November 2023',
          description: 'Social media platform breach exposing user credentials and private messages.',
          compromisedData: ['Email', 'Username', 'Password', 'Messages'],
        },
      ],
    };
  }

  return {
    breached: false,
    message: 'Good news! Your email address was not found in any known data breaches. Continue practicing good security habits.',
    breaches: [],
  };
};
