import React from 'react';
import { Box, Typography } from '@mui/material';
import { Phone, AccessTime, Email } from '@mui/icons-material';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconColor?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, iconColor }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 0.5,
        borderRadius: 1,
   
     
      }}
    >
      <Box
        sx={{
          color: iconColor || 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 32,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.7rem',
            display: 'block',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            userSelect: 'none',
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.primary',
            fontSize: '0.875rem',
            fontWeight: 600,
            mt: 0.25,
                 userSelect: 'none',
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
        gap: { md: 1, lg: 2 },
        alignItems: 'center',
      }}
    >
      <ContactItem
        icon={<Phone sx={{ fontSize: 20 }} />}
        label="Call Us"
        value="+91 7529949494 (For Recruitment)"
        iconColor="primary.main"
      />
      <ContactItem
        icon={<AccessTime sx={{ fontSize: 20 }} />}
        label="Opening"
        value="09:00 am - 18:00 pm"
        iconColor="success.main"
      />
      <ContactItem
        icon={<Email sx={{ fontSize: 20 }} />}
        label="Email"
        value="marketing@mscorpres.in"
        iconColor="warning.main"
      />
    </Box>
  );
};

export default ContactInfo;

