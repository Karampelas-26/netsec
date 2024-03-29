package com.netsec.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author George Karampelas
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DummyResponse {
    String response;
}
