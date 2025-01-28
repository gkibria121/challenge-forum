import { getChallenges } from "@/services/challenge";
import Main from "@/components/ui/Main";
import Container from "@/components/ui/Container";
import Pagination from "@/components/ui/Pagination";
import ChallengeTable from "@/components/challenge/ChallengeTable";
export default async function PageContent({ searchParams }) {
  const calculatedSearchParams = await searchParams;

  const page = parseInt(calculatedSearchParams.page) || 1;
  const per_page = parseInt(calculatedSearchParams.per_page) || 10;

  const { data, totalPages, currentPage } = await getChallenges({
    page,
    per_page,
  });

  return (
    <Main>
      <Container>
        <ChallengeTable challenges={data} redirectToPage={true} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          perPage={per_page}
        />
      </Container>
    </Main>
  );
}
