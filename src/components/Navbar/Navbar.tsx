import React from 'react';
import { Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import ebsLogo from './EBS logo.png';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  padding: 0;
`;

const NavbarContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  min-width: 280px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;

  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: #111;
    white-space: nowrap;
    transition: all 0.2s ease;
    letter-spacing: -0.2px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  flex: 1;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? '#111' : '#666'};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  position: relative;

  &:hover {
    color: #111;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #111;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover::after,
  ${props => props.$active && `
    &::after {
      transform: scaleX(1);
    }
  `}
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 280px;
  justify-content: flex-end;
`;

const AboutUsButton = styled(Button)`
  background: #000;
  color: white;
  border: none;
  height: 38px;
  padding: 0 24px;
  border-radius: 6px;
  font-weight: 500;

  &:hover {
    background: #333 !important;
    color: white !important;
  }
`;

const LoginButton = styled(Button)`
  background: white;
  color: #333;
  border: 1px solid #ddd;
  height: 38px;
  padding: 0 24px;
  border-radius: 6px;
  font-weight: 500;
  box-shadow: none;
  transition: all 0.2s ease;

  &:hover {
    background: white !important;
    color: #333 !important;
    border-color: #bbb !important;
  }
`;

const DropdownMenu = styled(Menu)`
  min-width: 300px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;

  .ant-dropdown-menu-item {
    padding: 8px 16px;
    border-radius: 6px;
  }

  .ant-menu-submenu-title {
    padding: 8px 16px;
    font-weight: 500;
  }

  .ant-menu-sub {
    padding: 4px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-top: 4px;
  }

  .ant-menu-item {
    margin: 4px 0;
    padding: 8px 16px;
    border-radius: 6px;
    white-space: nowrap;

    &:hover {
      background: #e9ecef;
    }
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const cardItems: MenuProps['items'] = [
    {
      key: 'axis-bank',
      label: <Link to="/cards/axis-bank">Axis Bank Credit Cards</Link>,
    },
    {
      key: 'hdfc-bank',
      label: <Link to="/cards/hdfc-bank">HDFC Bank Credit Cards</Link>,
    },
    {
      key: 'icici-bank',
      label: <Link to="/cards/icici-bank">ICICI Bank Credit Cards</Link>,
    },
    {
      key: 'idfc-bank',
      label: <Link to="/cards/idfc-bank">IDFC Bank Credit Cards</Link>,
    },
    {
      key: 'yes-bank',
      label: <Link to="/cards/yes-bank">Yes Bank Credit Cards</Link>,
    },
  ];

  const loansMenu = {
    personal: [
      {
        key: 'personal-banking',
        label: <Link to="/personal-loan/banking-partners">Banking Partners</Link>,
      },
      {
        key: 'personal-nbfc',
        label: <Link to="/personal-loan/nbfc-partners">Non-Banking Financial Company Partners</Link>,
      },
      {
        key: 'personal-fintech',
        label: <Link to="/personal-loan/fintech-partners">Fintech Partners</Link>,
      },
    ],
    business: [
      {
        key: 'business-banking',
        label: <Link to="/business-loan/banking-partners">Banking Partners</Link>,
      },
      {
        key: 'business-nbfc',
        label: <Link to="/business-loan/nbfc-partners">Non-Banking Financial Company Partners</Link>,
      },
      {
        key: 'business-fintech',
        label: <Link to="/business-loan/fintech-partners">Fintech Partners</Link>,
      },
    ],
    lap: [
      {
        key: 'lap-banking',
        label: <Link to="/loan-against-property/banking-partners">Banking Partners</Link>,
      },
      {
        key: 'lap-nbfc',
        label: <Link to="/loan-against-property/nbfc-partners">Non-Banking Financial Company Partners</Link>,
      },
      {
        key: 'lap-fintech',
        label: <Link to="/loan-against-property/fintech-partners">Fintech Partners</Link>,
      },
    ],
  };

  const loansDropdownMenu = (
    <DropdownMenu>
      <Menu.SubMenu key="personal" title="Personal Loans">
        {loansMenu.personal.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="business" title="Business Loan">
        {loansMenu.business.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="lap" title="Loan Against Property">
        {loansMenu.lap.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.Item key="home-loan">
        <Link to="/home-loan">Home Loan</Link>
      </Menu.Item>
      <Menu.Item key="home-loan-balance-transfer">
        <Link to="/home-loan-balance-transfer">Home Loan Balance Transfer</Link>
      </Menu.Item>
      <Menu.Item key="gold-loan">
        <Link to="/gold-loan">Gold Loan</Link>
      </Menu.Item>
    </DropdownMenu>
  );

  const insuranceMenu = (
    <DropdownMenu>
      <Menu.Item key="health">
        <Link to="/health-insurance">Health Insurance</Link>
      </Menu.Item>
      <Menu.Item key="life">
        <Link to="/life-insurance">Life Insurance</Link>
      </Menu.Item>
    </DropdownMenu>
  );

  return (
    <StyledHeader>
      <NavbarContainer>
        <LogoSection>
          <Link to="/" onClick={handleHomeClick}>
            <LogoContainer>
              <img src={ebsLogo} alt="EBS Finance" />
              <span>Everyday Banking Solutions</span>
            </LogoContainer>
          </Link>
        </LogoSection>

        <NavLinks>
          <NavLink to="/" onClick={handleHomeClick} $active={location.pathname === '/'}>
            Home
          </NavLink>
          <Dropdown overlay={<Menu items={cardItems} />} placement="bottom">
            <NavLink to="/credit-cards" $active={location.pathname.includes('credit-cards')}>
              Cards <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={loansDropdownMenu} trigger={['hover']}>
            <NavLink to="/loans" $active={location.pathname.includes('loan')}>
              Loans <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={insuranceMenu} trigger={['hover']}>
            <NavLink to="/insurance" $active={location.pathname.includes('insurance')}>
              Insurance <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
        </NavLinks>

        <ActionButtons>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to="/about-us">
            <AboutUsButton>About Us</AboutUsButton>
          </Link>
        </ActionButtons>
      </NavbarContainer>
    </StyledHeader>
  );
};

export default Navbar;
