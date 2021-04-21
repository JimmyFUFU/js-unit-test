import {Authentication} from "../src/authentication";
import * as otp from '../src/otp'

// jest.mock("../src/authentication")
jest.mock('../src/otp')

describe('authenticate account is valid', function () {
    it('should be valid', () => {
        let authentication = new Authentication();
        const fakeGetPassword = jest.fn();
        fakeGetPassword.mockReturnValueOnce('91')
        authentication.getPassword = fakeGetPassword;
        otp.get_token.mockReturnValueOnce('000000');
        expect(authentication.is_valid('joey', '91000000')).toBe(true);
    });
});