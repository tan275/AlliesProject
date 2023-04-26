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
  
  1. Acceptance of Terms and Conditions: By accessing and using the Allies social media application ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not use the Platform.
  <br> <br>
  2. Purpose of the Platform: The ultimate goal of Allies is to create a social media experience that prioritizes the well-being of users and encourages users to deepen their relationships with others, rather than just maximizing time spent on the platform. The Platform aims to combat traditionally toxic design elements that keep social media addicting and instead nurture wellness and well-being. Digital wellness is taken into high consideration, with features that promote healthy digital habits, such as absence of quantifying measures like likes and follows, chronological newsfeed without commercialized algorithms, screentime alerts, timers, reminders, and inbuilt meditation and self-help resources.
  <br> <br>
  3. User Conduct: As a user of the Platform, you agree to use the Platform in a responsible and respectful manner. You shall not engage in any activities that may harm or disrupt the experience of other users or the functioning of the Platform. You shall not use the Platform for any illegal, abusive, discriminatory, or harmful purposes. Hate speech, nudity, or any other form of inappropriate content is strictly prohibited. You are solely responsible for the content you post on the Platform and shall not post any content that violates the rights of others or is offensive, defamatory, or inappropriate.
  <br> <br>
  4. Privacy and Security: Allies takes the privacy and security of user information seriously. The Platform collects and stores user data in accordance with its Privacy Policy, which can be accessed separately. Users' personal information will be treated in accordance with applicable data protection laws, and Allies will not share user information with third parties without consent, except as required by law. Users have the right to request the deletion of their account and associated data at any time.
  <br> <br>
  5. Intellectual Property: The content and features of the Platform, including but not limited to the design, text, graphics, logos, icons, and images, are the property of Allies and are protected by intellectual property laws. Users shall not use, copy, reproduce, modify, or distribute any content or features of the Platform without the prior written consent of Allies.
  <br> <br>
  6. Limitation of Liability: Allies shall not be liable for any damages or losses incurred by users in connection with the use of the Platform. The Platform is provided on an "as is" basis and Allies does not make any warranties or representations regarding its functionality, availability, or accuracy.
  <br> <br>
  7. Termination: Allies reserves the right to terminate or suspend user accounts or access to the Platform at its discretion, without prior notice, if users violate these Terms and Conditions or engage in any activities that are harmful to the Platform or other users. Users also have the right to delete their account and associated data at any time.
  <br> <br>
  8. Changes to Terms and Conditions: Allies reserves the right to modify or update these Terms and Conditions at any time. Users are encouraged to review these Terms and Conditions periodically for any changes. Continued use of the Platform after any modifications or updates constitutes acceptance of the revised Terms and Conditions.
  <br> <br>
  9. Governing Law and Jurisdiction: These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction where Allies is based. Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
  <br> <br>
  10. Indemnification: You agree to indemnify and hold harmless Allies, its affiliates, officers, directors, employees, and agents, from and against any and all claims, damages, liabilities, losses, costs, or expenses, including attorney's fees, arising out of or in connection with your use of the Platform, your violation of these Terms and Conditions, or your violation of any rights of others.
  <br> <br>
  11. Third-Party Links and Content: The Platform may contain links to third-party websites or content that are not owned or controlled by Allies. Allies does not endorse or assume any responsibility for the content, privacy policies, or practices of such third-party websites or content. You access and use third-party websites or content at your own risk and should review their terms and conditions and privacy policies.
  <br> <br>
  12. Severability: If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
  <br> <br>
  13. Entire Agreement: These Terms and Conditions constitute the entire agreement between you and Allies with respect to the subject matter hereof and supersede all prior or contemporaneous agreements, understandings, or representations, whether oral or written, relating to the subject matter of these Terms and Conditions.
  <br> <br>
  14. Contact Us: If you have any questions or concerns about these Terms and Conditions or the Platform, please contact us from the contact segment.
  <br> <br>
  <br> <br>
  
  By using the Allies social media application, you acknowledge that you have read, understood, and agreed to these Terms and Conditions, including the ability to delete your account and associated data whenever necessary. You also agree to comply with all applicable laws and regulations while using the Platform.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Terms and Conditions",
        author: "Team Allies",
        date: "Last Updated on 25th April, 2023",
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
  