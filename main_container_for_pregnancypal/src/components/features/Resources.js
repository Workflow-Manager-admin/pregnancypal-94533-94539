import React from 'react';
import FeatureCard from '../common/FeatureCard';

/**
 * PUBLIC_INTERFACE
 * Resources component for PregnancyPal app
 * Provides additional resources and tools for pregnancy
 */
const Resources = () => {
  return (
    <div className="resources">
      <h2 className="section-title">Resources</h2>
      <p className="section-description">
        Helpful tools and information for your pregnancy journey.
      </p>

      <div className="resources-grid">
        <FeatureCard title="Hospital Bag Checklist" icon="🏥">
          <p>Essential items to pack for your hospital stay</p>
          <div className="checklist-preview">
            <p>• Hospital documentation</p>
            <p>• Comfortable clothing</p>
            <p>• Toiletries</p>
            <p>• Baby's first outfit</p>
            <p>• ...</p>
          </div>
          <button className="btn btn-secondary">View Full Checklist</button>
        </FeatureCard>

        <FeatureCard title="Birth Plan Template" icon="📝">
          <p>Create your personalized birth plan</p>
          <div className="plan-preview">
            <p>Define your preferences for:</p>
            <p>• Labor environment</p>
            <p>• Pain management options</p>
            <p>• Delivery preferences</p>
            <p>• Post-birth procedures</p>
          </div>
          <button className="btn">Create Birth Plan</button>
        </FeatureCard>

        <FeatureCard title="Nutrition Guidelines" icon="🥗">
          <p>Food recommendations for a healthy pregnancy</p>
          <div className="nutrition-preview">
            <p>Access information about:</p>
            <p>• Recommended daily nutrients</p>
            <p>• Foods to enjoy</p>
            <p>• Foods to avoid</p>
            <p>• Meal planning tips</p>
          </div>
          <button className="btn btn-secondary">View Guidelines</button>
        </FeatureCard>

        <FeatureCard title="Baby Name Explorer" icon="👶">
          <p>Find the perfect name for your baby</p>
          <div className="name-explorer-preview">
            <input 
              type="text" 
              placeholder="Search names..." 
              className="name-search"
            />
            <div className="name-filters">
              <span>Filters: </span>
              <button className="filter-btn">Origin</button>
              <button className="filter-btn">Gender</button>
              <button className="filter-btn">Meaning</button>
            </div>
          </div>
          <button className="btn">Browse Names</button>
        </FeatureCard>
      </div>
    </div>
  );
};

export default Resources;
