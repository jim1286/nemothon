import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from "react";
import { Popconfirm, notification } from "antd";
import { BR } from "@/theme";
import { ReactComponent as LocationOn } from "@/assets/svg/location_on.svg";
import { SvgIcon } from "..";

interface KaKaoMapProps {
  address: string;
  onClick: () => void;
}

const KaKaoMap: React.FC<KaKaoMapProps> = ({ address, onClick }) => {
  const [marker, setMarker] = useState<any>();
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!map || !address) {
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        notification.error({
          message: <BR>{`검색 결과가 없습니다.`}</BR>,
          placement: "bottomRight",
        });

        return;
      }

      // @ts-ignore
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      const bounds = new kakao.maps.LatLngBounds();

      // @ts-ignore
      bounds.extend(new kakao.maps.LatLng(result[0].y, result[0].x));

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      const newMarker = {
        position: {
          lat: result[0].y,
          lng: result[0].x,
        },
        content: "목적지",
      };

      setMarker(newMarker);
      map.setCenter(coords);
      map.setBounds(bounds);
    });
  }, [map, address]);

  return (
    <Map
      center={{ lat: 37.5283169, lng: 126.9294254 }}
      style={{ width: "100%", height: "100%" }}
      level={3}
      onCreate={setMap}
    >
      {marker && (
        <CustomOverlayMap position={marker.position}>
          <Popconfirm
            placement="top"
            title={"목적지"}
            description={"목적지로 설정하시겠습니까?"}
            onConfirm={onClick}
            okText="Yes"
            cancelText="No"
            icon={null}
            style={{
              width: "200px",
              height: "100px",
            }}
          >
            <>
              <SvgIcon icon={<LocationOn />} />
            </>
          </Popconfirm>
        </CustomOverlayMap>
      )}
    </Map>
  );
};

export default KaKaoMap;
