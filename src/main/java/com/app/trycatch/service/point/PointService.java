package com.app.trycatch.service.point;

import com.app.trycatch.dto.point.PointDetailsDTO;
import com.app.trycatch.repository.point.PointDetailsDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class PointService {
    private final PointDetailsDAO pointDetailsDAO;

    @Transactional(readOnly = true)
    public List<PointDetailsDTO> getPointDetails(Long memberId) {
        return pointDetailsDAO.findAllByMemberId(memberId);
    }

    @Transactional(readOnly = true)
    public int getTotalPoint(Long memberId) {
        return pointDetailsDAO.findTotalPointByMemberId(memberId);
    }
}
