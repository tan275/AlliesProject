<template>
    <div class="article">
      <button class="back-button" @click="goBack">&#8592; Back</button>
      <div class="article-header">
        <h1 class="article-title">{{ title }}</h1>
        <p class="article-details">
          By {{ author }} | {{ date }}
        </p>
        <hr class="article-divider" />
      </div>
      <div class="article-body">
        <p class="article-content">
          <br> <br>
  At Allies, we are committed to fostering a positive and inclusive community where users can connect and engage in a healthy and respectful manner. To ensure a safe and enjoyable experience for all users, we have established the following Community Guidelines:
  <br> <br>       
  <br> <br>
  1. Respectful Communication: Treat all users with kindness, respect, and consideration. Avoid engaging in any form of harassment, discrimination, hate speech, or bullying. Do not use offensive language, make derogatory comments, or engage in personal attacks.
  <br> <br>
  2. No Nudity or Graphic Content: Allies is a platform that promotes digital wellness and well-being. Therefore, posting or sharing any form of explicit nudity, sexually explicit content, or graphic violence is strictly prohibited.
  <br> <br>
  3. Privacy and Data Responsibility: Always respect the privacy and personal information of others. Do not share or disclose any confidential or sensitive information about other users without their explicit consent. Be mindful of the data you share on the platform and take responsibility for protecting your own privacy.
  <br> <br>
  4. Mindful Posting: Allies encourages meaningful and authentic connections. Therefore, refrain from engaging in spamming, posting repetitive or irrelevant content, or engaging in any activity that may disrupt the normal use of the platform or annoy other users.
  <br> <br>
  5. No Misinformation or Fake News: Do not spread false information, hoaxes, or fake news that may mislead other users or harm the community. Always fact-check information before sharing it on the platform.
  <br> <br>
  6. No Illegal or Harmful Activities: Do not engage in any illegal activities, including but not limited to, hacking, phishing, fraud, or spreading malware. Do not promote or engage in any form of violence, self-harm, or other harmful activities.
  <br> <br>
  7. Respect Intellectual Property: Do not infringe upon the intellectual property rights of others. Do not share or use copyrighted materials without proper authorization or attribution.
  <br> <br>
  8. Collaborative and Supportive Environment: Allies is a platform that encourages users to deepen their relationships with others. Therefore, be supportive, collaborative, and inclusive in your interactions with other users. Avoid engaging in negative or divisive behavior that may harm the community.
  <br> <br>
  9. Reporting and Moderation: If you come across any content or behavior that violates these Community Guidelines, please report it to the platform moderators. Allies reserves the right to remove or moderate any content or user accounts that violate these guidelines or the Terms and Conditions of the platform.
  <br> <br>
  10. Account Deletion: Users have the right to delete their accounts and associated data at any time, as per the Terms and Conditions of the platform.
  <br> <br>
  <br> <br>
  By using the Allies social media application, you agree to adhere to these Community Guidelines, along with the Terms and Conditions of the platform, to ensure a positive and respectful environment for all users. Failure to comply with these guidelines may result in the removal of content or suspension or termination of your account.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Community Guidelines",
        author: "Team Allies",
        date: "Last Updated on 16th April, 2023",
        email: "",
        name: "",
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  .article {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
  }
  
  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .article-header {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .article-title {
    margin: 0;
    font-size: 2.5rem;
  }
  
  .article-title1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  .article-details {
    margin-top: 0;
    font-size: 1rem;
    color: #777;
  }
  
  .article-divider {
    border: none;
    height: 1px;
    background-color: #ddd;
    margin-bottom: 30px;
  }
  
  .article-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    height: auto;
  }
  
  .article-content {
    line-height: 1.5;
    margin-top: 30px;
    text-align: justify;
  }
  
  </style>
  