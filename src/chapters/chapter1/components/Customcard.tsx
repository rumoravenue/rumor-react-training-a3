import { Card, CardBody, CardFooter, CardHeader, Text, Image } from '@chakra-ui/react';
import React from 'react';

interface CustomCardProps {
  jobTitle: string;
  desc: string;
  photo: string;
  avatar: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ jobTitle, desc, photo, avatar }) => {
  return (
    <Card width="300px" boxShadow="lg" borderRadius="lg">
      <CardHeader>
        <Image src={photo} alt="Job" borderRadius="lg" />
      </CardHeader>
      <CardBody>
        <Text fontSize="xl" fontWeight="bold">{jobTitle}</Text>
        <Text>{desc}</Text>
      </CardBody>
      <CardFooter>
        <Image src={avatar} alt="Avatar" borderRadius="full" boxSize="40px" />
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
