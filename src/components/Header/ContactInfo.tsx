import React from 'react';
import { Box, Typography } from '@mui/material';
import { Phone, AccessTime, Email } from '@mui/icons-material';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box
        sx={{
          color: '#d32f2f',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          variant="caption"
          sx={{
            color: '#9e9e9e',
            fontSize: '0.75rem',
            display: 'block',
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#424242',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        gap: { md: 2, lg: 4 },
        alignItems: 'center',
      }}
    >
      <ContactItem
        icon={<Phone sx={{ fontSize: 20 }} />}
        label="Call Us Anytime"
        value="1-888-123-4567"
      />
      <ContactItem
        icon={<AccessTime sx={{ fontSize: 20 }} />}
        label="Opening Time"
        value="08:00 - 18:00"
      />
      <ContactItem
        icon={<Email sx={{ fontSize: 20 }} />}
        label="Email Us"
        value="info@cargopress.io"
      />
    </Box>
  );
};

export default ContactInfo;

