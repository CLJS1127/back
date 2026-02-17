package com.app.trycatch.repository.experience;

import com.app.trycatch.common.pagination.Criteria;
import com.app.trycatch.common.search.Search;
import com.app.trycatch.dto.experience.ExperienceProgramDTO;
import com.app.trycatch.mapper.experience.ExperienceProgramMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ExperienceProgramDAO {
    private final ExperienceProgramMapper experienceProgramMapper;

    public List<ExperienceProgramDTO> findAllByMemberIdOfChallenger(Criteria criteria, Search search, Long id) {
        return experienceProgramMapper.selectAllByMemberIdOfChallenger(criteria, search, id);
    }

    public int findTotalByMemberIdOfChallenger(Search search, Long id) {
        return experienceProgramMapper.selectTotalByMemberIdOfChallenger(search, id);
    }
}
