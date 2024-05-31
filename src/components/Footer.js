import React from 'react';
import { Divider, Flex, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex as="footer" width="full" padding="4" bg="gray.100" justifyContent="center" alignItems="center">
            <VStack spacing={2}>
                <Text fontSize={['10px', 'sm', 'sm', 'sm']}>当サイトのテキストや画像等の無断転載・無断使用はご遠慮ください。</Text>
                <Divider />
                <Text fontSize="xs">Powered by React & Chakra UI</Text>
            </VStack>
        </Flex>
    );
};

export default Footer;
