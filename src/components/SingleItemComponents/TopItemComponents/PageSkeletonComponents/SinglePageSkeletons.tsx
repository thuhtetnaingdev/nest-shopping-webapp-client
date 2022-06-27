import { Box, Group, Skeleton } from "@mantine/core";

function ImageSkeleton() {
  return (
    <Box>
      <Skeleton height={398} />
      <Group grow mt="xs">
        <Skeleton height={90} width={150} mt={10} />
        <Skeleton height={90} width={150} mt={10} />
        <Skeleton height={90} width={150} mt={10} />
        <Skeleton height={90} width={150} mt={10} />
      </Group>
    </Box>
  );
}

const ContentSkeleton = () => {
  return (
    <>
      <Skeleton height={30} />
      <Skeleton height={30} mt={10} />
      <Box mt={30}>
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
      </Box>
      <Box mt="lg">
        <Skeleton height={30} width={150} mt={10} />
        <Skeleton height={30} width={150} mt={50} />
        <Skeleton height={8} width={150} mt={10} />
      </Box>
      <Group grow>
        <Skeleton height={50} width={242} mt={10} />
        <Skeleton height={50} width={242} mt={10} />
      </Group>
    </>
  );
};

export { ImageSkeleton, ContentSkeleton };
