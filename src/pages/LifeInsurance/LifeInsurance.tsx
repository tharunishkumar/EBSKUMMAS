import React from 'react';
import styled from 'styled-components';
import { Steps, Collapse } from 'antd';
import lifeInsuranceImg from '../../assets/images/services/life-insurance.jpg';

const { Panel } = Collapse;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${lifeInsuranceImg}) no-repeat center;
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

const PlansList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const PlanItem = styled.li`
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

const LifeInsurance: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Life Insurance</Title>
          <Subtitle>Secure your family's future with comprehensive life coverage</Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Why Choose Our Life Insurance?</SectionTitle>
        <Grid>
          <FeatureCard>
            <FeatureTitle>Financial Security</FeatureTitle>
            <FeatureDescription>
              Ensure your family's financial stability with comprehensive coverage
              that provides a secure future for your loved ones.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Flexible Plans</FeatureTitle>
            <FeatureDescription>
              Choose from a variety of plans tailored to your needs, with options
              for term life, whole life, and investment-linked policies.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Tax Benefits</FeatureTitle>
            <FeatureDescription>
              Take advantage of tax benefits under Section 80C and 10(10D) of
              the Income Tax Act for premiums paid and maturity benefits.
            </FeatureDescription>
          </FeatureCard>
        </Grid>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Available Plans</SectionTitle>
        <PlansList>
          <PlanItem>Term Life Insurance</PlanItem>
          <PlanItem>Whole Life Cover</PlanItem>
          <PlanItem>ULIP Plans</PlanItem>
          <PlanItem>Child Insurance Plans</PlanItem>
          <PlanItem>Retirement Plans</PlanItem>
          <PlanItem>Money-Back Policies</PlanItem>
          <PlanItem>Group Life Insurance</PlanItem>
          <PlanItem>Critical Illness Cover</PlanItem>
        </PlansList>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Policy Purchase Process</SectionTitle>
        <TimelineContainer>
          <Steps
            direction="vertical"
            current={-1}
            items={[
              {
                title: 'Choose a Plan',
                description: 'Select the most suitable plan for your needs'
              },
              {
                title: 'Documentation',
                description: 'Submit required documents and complete medical check-up if required'
              },
              {
                title: 'Verification',
                description: 'Our team verifies your application and documents'
              },
              {
                title: 'Policy Issuance',
                description: 'Policy document issued after successful verification'
              }
            ]}
          />
        </TimelineContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          <Collapse>
            <Panel header="What is the minimum age to buy life insurance?" key="1">
              The minimum age to buy life insurance is typically 18 years, while the maximum age
              varies by policy type. Term insurance can be bought up to age 65 in most cases.
            </Panel>
            <Panel header="How much life cover do I need?" key="2">
              A general thumb rule is to have life cover of at least 10-15 times your annual income.
              However, this can vary based on your financial obligations, dependents, and future goals.
            </Panel>
            <Panel header="What happens if I miss premium payments?" key="3">
              Most policies offer a grace period of 30 days for premium payment. If payment isn't made
              within this period, the policy may lapse. However, you can revive the policy within a
              specified period by paying due premiums with interest.
            </Panel>
            <Panel header="Are the premiums tax deductible?" key="4">
              Yes, premiums paid for life insurance policies are eligible for tax deduction under
              Section 80C of the Income Tax Act, up to ₹1.5 lakhs per annum.
            </Panel>
            <Panel header="How are death claims processed?" key="5">
              The nominee needs to intimate the insurance company and submit required documents like
              death certificate, policy documents, and claim forms. Claims are typically settled
              within 30 days of receiving all documents.
            </Panel>
          </Collapse>
        </FAQContainer>
      </ContentSection>

      <CTASection>
        <SectionTitle>Secure Your Family's Future Today</SectionTitle>
        <CTAButton>Get a Quote</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default LifeInsurance;
