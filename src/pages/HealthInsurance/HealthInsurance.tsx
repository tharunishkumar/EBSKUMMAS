import React from 'react';
import styled from 'styled-components';
import { Steps, Collapse } from 'antd';
import healthInsuranceImg from '../../assets/images/services/health-insurance.jpg';

const { Panel } = Collapse;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${healthInsuranceImg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 70px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ContentSection = styled.section`
  padding: 80px 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CoverageList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const CoverageItem = styled.li`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  color: #333;
  font-size: 1.1rem;

  &:before {
    content: "✓";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #4CAF50;
    color: white;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;

  .ant-collapse {
    background: transparent;
    border: none;
  }

  .ant-collapse-item {
    margin-bottom: 16px;
    border: 1px solid #eee;
    border-radius: 10px !important;
    overflow: hidden;
  }

  .ant-collapse-header {
    font-size: 1.1rem;
    padding: 16px 24px !important;
  }

  .ant-collapse-content {
    border-top: 1px solid #eee;
  }
`;

const CTASection = styled.section`
  background-color: #f8f9fa;
  padding: 60px 5%;
  text-align: center;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #0094d9 0%, #0077b6 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 119, 182, 0.2);
  }

  &:active {
    transform: translateY(0);
    background-color: #333;
  }
`;

const HealthInsurance: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Health Insurance</Title>
          <Subtitle>Comprehensive health coverage for you and your family</Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Why Choose Our Health Insurance?</SectionTitle>
        <Grid>
          <FeatureCard>
            <FeatureTitle>Comprehensive Coverage</FeatureTitle>
            <FeatureDescription>
              Get extensive coverage for hospitalization, surgeries, and medical treatments
              with our comprehensive health insurance plans.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Cashless Claims</FeatureTitle>
            <FeatureDescription>
              Access our network of 5000+ hospitals nationwide for hassle-free
              cashless treatment and claim settlement.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Family Coverage</FeatureTitle>
            <FeatureDescription>
              Protect your entire family under a single policy with customizable
              coverage options and benefits.
            </FeatureDescription>
          </FeatureCard>
        </Grid>
      </ContentSection>

      <ContentSection>
        <SectionTitle>What's Covered?</SectionTitle>
        <CoverageList>
          <CoverageItem>Hospitalization Expenses</CoverageItem>
          <CoverageItem>Pre & Post Hospitalization</CoverageItem>
          <CoverageItem>Day Care Treatments</CoverageItem>
          <CoverageItem>Ambulance Charges</CoverageItem>
          <CoverageItem>ICU Charges</CoverageItem>
          <CoverageItem>Room Rent</CoverageItem>
          <CoverageItem>Doctor's Consultation</CoverageItem>
          <CoverageItem>Diagnostic Tests</CoverageItem>
        </CoverageList>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Claim Process</SectionTitle>
        <TimelineContainer>
          <Steps
            direction="vertical"
            current={-1}
            items={[
              {
                title: 'Inform Us',
                description: 'Notify us about the hospitalization within 24 hours'
              },
              {
                title: 'Documentation',
                description: 'Submit required documents for claim processing'
              },
              {
                title: 'Verification',
                description: 'Our team verifies the submitted documents'
              },
              {
                title: 'Settlement',
                description: 'Claim amount settled directly with hospital or reimbursed to you'
              }
            ]}
          />
        </TimelineContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          <Collapse>
            <Panel header="What is the waiting period for pre-existing conditions?" key="1">
              The waiting period for pre-existing conditions is typically 2-4 years, depending on the condition
              and the policy terms. Some specific conditions might have different waiting periods.
            </Panel>
            <Panel header="Is maternity covered under the policy?" key="2">
              Yes, maternity coverage is available with a waiting period of 2 years. It covers both normal
              and caesarean deliveries, along with pre and post-natal expenses.
            </Panel>
            <Panel header="What is not covered under the policy?" key="3">
              Cosmetic treatments, dental procedures (unless caused by accident), experimental treatments,
              and self-inflicted injuries are typically not covered under the policy.
            </Panel>
            <Panel header="Can I add family members later?" key="4">
              Yes, you can add family members during policy renewal or upon marriage/childbirth.
              Additional premium may be applicable based on the coverage.
            </Panel>
            <Panel header="How do I make a cashless claim?" key="5">
              Visit a network hospital, show your health card, fill the pre-authorization form,
              and our team will coordinate directly with the hospital for claim settlement.
            </Panel>
          </Collapse>
        </FAQContainer>
      </ContentSection>

      <CTASection>
        <SectionTitle>Protect Your Family Today</SectionTitle>
        <CTAButton>Get a Quote</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default HealthInsurance;
