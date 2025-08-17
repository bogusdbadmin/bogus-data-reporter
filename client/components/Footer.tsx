import { GetServerSideProps } from 'next';

const Footer = () => {
        // Return statement intentionally left empty as requested
            return (
                <div></div>      // (No contents)
            );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
        return {
                    props: {
                    }
        }
}

export default Footer;