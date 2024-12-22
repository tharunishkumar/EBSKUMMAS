import React from 'react';
import styled from 'styled-components';
import { Steps, Collapse, Rate } from 'antd';
import balanceTransferImg from '../../assets/images/services/balance-transfer.jpg';

const { Panel } = Collapse;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${balanceTransferImg}) no-repeat center;
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

const RateCard = styled.div`
  background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);
  padding: 30px;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

const RateValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const RateDescription = styled.p`
  font-size: 1.1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const FeatureItem = styled.li`
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
    background: #2193b0;
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
  background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(33, 147, 176, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HomeLoanBalanceTransfer: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Home Loan Balance Transfer</Title>
          <Subtitle>Switch your home loan to EBS for better rates and benefits</Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <RateCard>
          <FeatureTitle>Transfer Your Home Loan at Just</FeatureTitle>
          <RateValue>8.5% p.a.*</RateValue>
          <RateDescription>*Terms and conditions apply</RateDescription>
        </RateCard>

        <SectionTitle>Why Transfer to EBS?</SectionTitle>
        <Grid>
          <FeatureCard>
            <FeatureTitle>Lower Interest Rates</FeatureTitle>
            <FeatureDescription>
              Enjoy significantly lower interest rates compared to your current lender,
              helping you save money on EMIs.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Zero Processing Fee</FeatureTitle>
            <FeatureDescription>
              Transfer your loan without any processing charges. We believe in
              transparent and hassle-free transactions.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Top-up Loan Available</FeatureTitle>
            <FeatureDescription>
              Get additional funds as top-up loan for renovation, education,
              or any other purpose at attractive rates.
            </FeatureDescription>
          </FeatureCard>
        </Grid>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Key Benefits</SectionTitle>
        <FeaturesList>
          <FeatureItem>Lower Interest Rates</FeatureItem>
          <FeatureItem>Reduced EMI Burden</FeatureItem>
          <FeatureItem>Longer Repayment Tenure</FeatureItem>
          <FeatureItem>Quick Processing</FeatureItem>
          <FeatureItem>Zero Processing Fee</FeatureItem>
          <FeatureItem>Top-up Loan Facility</FeatureItem>
          <FeatureItem>Doorstep Service</FeatureItem>
          <FeatureItem>Digital Documentation</FeatureItem>
        </FeaturesList>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Transfer Process</SectionTitle>
        <TimelineContainer>
          <Steps
            direction="vertical"
            current={-1}
            items={[
              {
                title: 'Apply Online',
                description: 'Fill out our simple online application form'
              },
              {
                title: 'Document Submission',
                description: 'Submit required documents for verification'
              },
              {
                title: 'Loan Evaluation',
                description: 'Our team evaluates your current loan details'
              },
              {
                title: 'Offer Letter',
                description: 'Receive and accept our balance transfer offer'
              },
              {
                title: 'NOC & Transfer',
                description: 'Get NOC from current bank and complete transfer'
              }
            ]}
          />
        </TimelineContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          <Collapse>
            <Panel header="What is Home Loan Balance Transfer?" key="1">
              Home Loan Balance Transfer is the process of transferring your existing
              home loan from your current lender to EBS to take advantage of lower
              interest rates and better services.
            </Panel>
            <Panel header="What documents are required?" key="2">
              Required documents include:
              - Existing loan account statements
              - Property documents
              - Identity and address proof
              - Income documents
              - Latest loan outstanding letter
            </Panel>
            <Panel header="Is there any processing fee?" key="3">
              No, we offer zero processing fee on home loan balance transfer. However,
              there might be some statutory charges as per government regulations.
            </Panel>
            <Panel header="Can I get additional loan amount?" key="4">
              Yes, you can avail a top-up loan along with your balance transfer,
              subject to eligibility and property value assessment.
            </Panel>
            <Panel header="How long does the process take?" key="5">
              The balance transfer process typically takes 7-14 working days,
              depending on documentation and verification process.
            </Panel>
          </Collapse>
        </FAQContainer>
      </ContentSection>

      <CTASection>
        <SectionTitle>Switch to EBS Today</SectionTitle>
        <CTAButton>Start Transfer Process</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default HomeLoanBalanceTransfer;
