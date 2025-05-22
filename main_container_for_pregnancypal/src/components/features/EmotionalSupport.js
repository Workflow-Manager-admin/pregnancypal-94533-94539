import React from 'react';
import FeatureCard from '../common/FeatureCard';

/**
 * PUBLIC_INTERFACE
 * EmotionalSupport component for PregnancyPal app
 * Provides resources for mental and emotional wellbeing during pregnancy
 */
const EmotionalSupport = () => {
  return (
    <div className="emotional-support">
      <h2 className="section-title">Emotional Support</h2>
      <p className="section-description">
        Resources to support your mental and emotional wellbeing throughout pregnancy.
      </p>

      <div className="support-cards">
        <FeatureCard title="Mood Tracker" icon="😊">
          <p>Track your emotional wellbeing throughout pregnancy</p>
          <div className="mood-selector">
            <button className="mood-btn">😀</button>
            <button className="mood-btn">🙂</button>
            <button className="mood-btn">😐</button>
            <button className="mood-btn">☹️</button>
            <button className="mood-btn">😢</button>
          </div>
          <button className="btn">Log Today's Mood</button>
        </FeatureCard>

        <FeatureCard title="Meditation & Relaxation" icon="🧘‍♀️">
          <p>Guided sessions to help you relax and reduce stress</p>
          <div className="meditation-list">
            <div className="meditation-item">
              <h4>Breath Awareness</h4>
              <p>5 minutes • Beginner</p>
              <button className="btn btn-secondary">Start</button>
            </div>
            <div className="meditation-item">
              <h4>Pregnancy Relaxation</h4>
              <p>10 minutes • All levels</p>
              <button className="btn btn-secondary">Start</button>
            </div>
            <div className="meditation-item">
              <h4>Sleep Aid</h4>
              <p>15 minutes • All levels</p>
              <button className="btn btn-secondary">Start</button>
            </div>
          </div>
        </FeatureCard>

        <FeatureCard title="Community Support" icon="👩‍👩‍👧‍👧">
          <p>Connect with other expectant mothers</p>
          <div className="community-preview">
            <div className="forum-topic">
              <h4>First-time moms support group</h4>
              <p>124 members • Active discussions</p>
            </div>
            <div className="forum-topic">
              <h4>Dealing with pregnancy anxiety</h4>
              <p>78 members • Active discussions</p>
            </div>
          </div>
          <button className="btn">Join Community</button>
        </FeatureCard>
      </div>
    </div>
  );
};

export default EmotionalSupport;
