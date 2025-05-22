import React from 'react';
import FeatureCard from '../common/FeatureCard';

/**
 * PUBLIC_INTERFACE
 * MedicalAdvice component for PregnancyPal app
 * Provides medical guidance and resources for pregnant users
 */
const MedicalAdvice = () => {
  // Placeholder articles that would come from an API in real implementation
  const articles = [
    {
      id: 1,
      title: "Managing Morning Sickness",
      excerpt: "Tips and strategies to help with nausea during pregnancy...",
      category: "First Trimester",
    },
    {
      id: 2,
      title: "Nutrition for the Second Trimester",
      excerpt: "Important nutrients and dietary guidelines as your baby grows...",
      category: "Second Trimester",
    },
    {
      id: 3,
      title: "Preparing for Labor",
      excerpt: "What to expect and how to prepare for childbirth...",
      category: "Third Trimester",
    },
  ];

  return (
    <div className="medical-advice">
      <h2 className="section-title">Medical Advice</h2>
      <p className="section-description">
        Expert guidance and resources for a healthy pregnancy.
      </p>

      <div className="advice-sections">
        <FeatureCard title="Questions for Doctor" icon="🩺">
          <p>Prepare for your next appointment with suggested questions</p>
          <div className="question-list">
            <p>• What prenatal vitamins should I take?</p>
            <p>• How much weight should I gain?</p>
            <p>• What symptoms are concerning?</p>
          </div>
          <button className="btn">Add to My Questions</button>
        </FeatureCard>

        <FeatureCard title="Health Articles" icon="📄">
          <div className="articles-list">
            {articles.map(article => (
              <div key={article.id} className="article-preview">
                <h4>{article.title}</h4>
                <span className="article-category">{article.category}</span>
                <p>{article.excerpt}</p>
                <button className="btn btn-text">Read More</button>
              </div>
            ))}
          </div>
          <button className="btn btn-secondary">Browse All Articles</button>
        </FeatureCard>

        <FeatureCard title="Telemedicine" icon="📱">
          <p>Connect with healthcare professionals from home</p>
          <button className="btn">Schedule Virtual Appointment</button>
        </FeatureCard>
      </div>
    </div>
  );
};

export default MedicalAdvice;
