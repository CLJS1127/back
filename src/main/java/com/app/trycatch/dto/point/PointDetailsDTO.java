package com.app.trycatch.dto.point;

import com.app.trycatch.common.enumeration.point.PointType;
import com.app.trycatch.domain.point.PointDetailsVO;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
public class PointDetailsDTO {
    private Long id;
    private Long memberId;
    private PointType pointType;
    private int pointAmount;
    private Integer paymentAmount;
    private String expireDatetime;
    private String createdDatetime;
    private String updatedDatetime;

    public String getPointTypeLabel() {
        if (pointType == null) return "-";
        return switch (pointType) {
            case EARN -> "일반충전";
            case USE -> "사용";
            case EXPIRE -> "만료";
            case PURCHASE_CANCEL -> "구매취소";
        };
    }

    public PointDetailsVO toVO() {
        return PointDetailsVO.builder()
                .id(id)
                .memberId(memberId)
                .pointType(pointType)
                .pointAmount(pointAmount)
                .paymentAmount(paymentAmount)
                .expireDatetime(expireDatetime)
                .createdDatetime(createdDatetime)
                .updatedDatetime(updatedDatetime)
                .build();
    }
}
